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

type AuthResponse struct {
	Expires      string
	ExpiresIn    int64
	AccessToken  string
	RefreshToken string
}

func GetAccessToken(clientId string, secret string) string {
	postBody, _ := json.Marshal(map[string]string{
		"clientId": clientId,
		"secret":   secret,
	})

	responseBody := bytes.NewBuffer(postBody)

	resp, err := http.Post("https://app.orgspace.io/api/auth", "application/json", responseBody)

	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		panic(err)
	}

	var authResponse AuthResponse

	json.Unmarshal(body, &authResponse)

	return authResponse.AccessToken
}

func main() {
	clientId := os.Getenv("ORGSPACE_CLIENT_ID")
	secret := os.Getenv("ORGSPACE_SECRET")

	if clientId == "" || secret == "" {
		panic("Expecting both ORGSPACE_CLIENT_ID and ORGSPACE_SECRET to be set")
	}

	token := GetAccessToken(clientId, secret)

	src := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: token},
	)

	httpClient := oauth2.NewClient(context.Background(), src)

	client := graphql.NewClient("https://app.orgspace.io/api/gql", httpClient)

	var allMembers AllMembers

	err := client.Query(context.Background(), &allMembers, nil)

	if err != nil {
		panic(err)
	}

	fmt.Println(allMembers)
}
