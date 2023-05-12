package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/hasura/go-graphql-client"
	"golang.org/x/oauth2"
)

type AllMembers struct {
	Organization struct {
		Members struct {
			Edges []struct {
				Node struct {
					ID       graphql.ID
					Name     string
					Employee struct {
						Skills []struct {
							Skill struct {
								Name string
							}
							Level     int64
							LevelName string
						}
					} `graphql:"... on Employee"`
				}
			}
		}
	}
}

type CreateMemberResponse struct {
	Errors []struct {
		Field   string
		Message string
	}
	Response []struct {
		ID       graphql.ID
		Name     string
		Employee struct {
			Skills []struct {
				Skill struct {
					Name string
				}
				Level     int64
				LevelName string
			}
		} `graphql:"... on Employee"`
	}
}

// input CreateMemberInput {
// 	assignments: [TeamAssignmentInputType!]!
// 	dateOfBirth: Long
// 	draftId: ID
// 	endDate: Long
// 	headcountNumber: String
// 	hiringManagerId: String
// 	jobFamilyId: String
// 	managerId: String
// 	memberId: String
// 	memberType: MemberTypeEnum
// 	name: String!
// 	openedOn: Long
// 	partTime: Boolean
// 	profilePicture: ImageInput
// 	pronouns: String
// 	skills: [ID!]!
// 	startDate: Long
// 	titleId: String
// 	workEmail: String
//   }

type CreateMemberInput struct {
	Name     string
	PartTime bool
}

type AuthResponse struct {
	Expires      string
	ExpiresIn    int64
	AccessToken  string
	RefreshToken string
}

func InitClient(clientId string, secret string) (error, *graphql.Client) {
	err, token := GetAccessToken(clientId, secret)

	if err != nil {
		return err, nil
	}

	src := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: token},
	)

	httpClient := oauth2.NewClient(context.Background(), src)

	client := graphql.NewClient("https://app.orgspace.io/api/gql", httpClient)

	return nil, client
}

func GetAccessToken(clientId string, secret string) (error, string) {
	postBody, _ := json.Marshal(map[string]string{
		"clientId": clientId,
		"secret":   secret,
	})

	responseBody := bytes.NewBuffer(postBody)

	resp, err := http.Post("https://app.orgspace.io/api/auth", "application/json", responseBody)

	if err != nil {
		return err, ""
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		return err, ""
	}

	var authResponse AuthResponse

	json.Unmarshal(body, &authResponse)

	return nil, authResponse.AccessToken
}

func CreateMember(input CreateMemberInput, client *graphql.Client) (error, CreateMemberResponse) {
	var memberResponse CreateMemberResponse
	var variables = map[string]interface{}{
		"input": input,
	}

	err := client.Mutate(context.Background(), memberResponse, variables)

	return err, memberResponse
}

func GetAllMembers(client *graphql.Client) (error, AllMembers) {
	var allMembers AllMembers

	err := client.Query(context.Background(), &allMembers, nil)

	return err, allMembers
}

func main() {
	clientId := os.Getenv("ORGSPACE_CLIENT_ID")
	secret := os.Getenv("ORGSPACE_SECRET")

	if clientId == "" || secret == "" {
		panic("Expecting both ORGSPACE_CLIENT_ID and ORGSPACE_SECRET to be set")
	}

	err, client := InitClient(clientId, secret)

	if err != nil {
		panic(err)
	}

	err, allMembers := GetAllMembers(client)

	fmt.Println(allMembers)
}
