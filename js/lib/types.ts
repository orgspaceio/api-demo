import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanOrAttributeList: any;
  DateTime: any;
  Long: any;
};

/** Refers to an individual user account to the Orgspace system */
export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  users: Array<User>;
};

/** Refers to the design or blueprint of how access control roles are structured and organized within the application's database.  */
export enum AclRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Finance = 'FINANCE',
  Hr = 'HR',
  Reader = 'READER'
}

export type AddSkillToMemberInput = {
  draftId?: InputMaybe<Scalars['ID']>;
  memberId: Scalars['String'];
  skillId?: InputMaybe<Scalars['String']>;
  skillName?: InputMaybe<Scalars['String']>;
};

/** Percentage of people under 40 to people over 40 */
export type AgeRatio = {
  __typename?: 'AgeRatio';
  overFortyStatus?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
};

/** A lens that has been applied to a given org chart in team or people view to highlight data of interest to a user */
export type AppliedLens = {
  __typename?: 'AppliedLens';
  color: Scalars['String'];
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  label: Scalars['String'];
};

export enum AssetBalanceSort {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
  None = 'NONE'
}

/** An amount of funding for a given team in a given fiscal year */
export type Budget = {
  __typename?: 'Budget';
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  endingOn?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  limit?: Maybe<Money>;
  startingOn?: Maybe<Scalars['Long']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

/** The authorization given to users that enables them to access specific resources */
export type Can = {
  __typename?: 'Can';
  create: PermissionSet;
  delete: PermissionSet;
  edit: PermissionSet;
  read: PermissionSet;
};

/** The authorization given to users that enables them to access specific resources */
export type CanCan = {
  __typename?: 'CanCan';
  create: Scalars['BooleanOrAttributeList'];
  delete: Scalars['BooleanOrAttributeList'];
  read: Scalars['BooleanOrAttributeList'];
  update: Scalars['BooleanOrAttributeList'];
};

/** The percentage of a given teams cost that can be allocated as a capital expenditure */
export type CapexMix = {
  __typename?: 'CapexMix';
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  endingOn: Scalars['Long'];
  forecastId: Scalars['String'];
  id: Scalars['ID'];
  percentCapex: Scalars['Long'];
  startingOn: Scalars['Long'];
  updatedAt?: Maybe<Scalars['Long']>;
};

export type ChangeNarration = {
  __typename?: 'ChangeNarration';
  kind?: Maybe<ChangeNarrationKind>;
  narration?: Maybe<Scalars['String']>;
};

export enum ChangeNarrationKind {
  Expansion = 'Expansion',
  Layoff = 'Layoff',
  Rif = 'RIF',
  Reorg = 'Reorg',
  Update = 'Update'
}

export type ChartLegendItem = {
  __typename?: 'ChartLegendItem';
  color: Scalars['String'];
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ChartRenderable = {
  draftId: Scalars['ID'];
  id: Scalars['ID'];
};

/** A client is a company or organization that your company does business with */
export type Client = {
  __typename?: 'Client';
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  endDate?: Maybe<Scalars['Long']>;
  engagements: ClientEngagementConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Long']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type ClientConnection = {
  __typename?: 'ClientConnection';
  edges: Array<ClientEdge>;
  pageInfo: PageInfo;
};

export type ClientEdge = {
  __typename?: 'ClientEdge';
  cursor: Scalars['String'];
  node: Client;
};

/** Client engagements are time-bounded relationships with clients with one or more teams working on them. */
export type ClientEngagement = {
  __typename?: 'ClientEngagement';
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  endDate?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  officeId?: Maybe<Scalars['String']>;
  probabilityToClose?: Maybe<Scalars['Long']>;
  reason?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Long']>;
  teams: TeamConnection;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type ClientEngagementConnection = {
  __typename?: 'ClientEngagementConnection';
  edges: Array<ClientEngagementEdge>;
  pageInfo: PageInfo;
};

export type ClientEngagementEdge = {
  __typename?: 'ClientEngagementEdge';
  cursor: Scalars['String'];
  node: ClientEngagement;
};

export type ClientEngagementFilterArgs = {
  clientId?: InputMaybe<Scalars['ID']>;
};

/** A contractor in Orgspace represents someone who works on a team for your org, but on a contract basis. usually through some other organization. They tend to have more defined start and end dates, and in Orgspace, can be attached to a Vendor so you can understand who amongst a set of contractors works with one or more given vendors */
export type Contractor = ChartRenderable & Member & {
  __typename?: 'Contractor';
  SCHEMA?: Maybe<Scalars['Float']>;
  _tag?: Maybe<Scalars['String']>;
  assignableTeams: TeamConnection;
  assignments: TeamAssignmentConnection;
  billableRate?: Maybe<Scalars['Float']>;
  can: CanCan;
  contractorId?: Maybe<Scalars['String']>;
  cost?: Maybe<Cost>;
  createdAt?: Maybe<Scalars['Long']>;
  dateOfBirth?: Maybe<Scalars['Long']>;
  dismissed: Scalars['Boolean'];
  draftId: Scalars['ID'];
  endDate?: Maybe<Scalars['Long']>;
  ethnicity?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  homeLocationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobFamily?: Maybe<JobFamily>;
  jobFamilyId?: Maybe<Scalars['String']>;
  level?: Maybe<Level>;
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  office?: Maybe<Office>;
  officeId?: Maybe<Scalars['String']>;
  possibleManagers: MemberConnection;
  profilePicture?: Maybe<Image>;
  pronouns?: Maybe<Scalars['String']>;
  reportCount?: Maybe<Scalars['Int']>;
  reports: MemberConnection;
  roleId?: Maybe<Scalars['String']>;
  skills: Array<MemberSkillLevel>;
  startDate?: Maybe<Scalars['Long']>;
  status?: Maybe<Scalars['String']>;
  teamHistory: TeamTenureConnection;
  title?: Maybe<Title>;
  titleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Long']>;
  vendor?: Maybe<Vendor>;
  vendorId?: Maybe<Scalars['String']>;
  weeklyHoursTarget: Scalars['Long'];
  workEmail?: Maybe<Scalars['String']>;
  workLocationId?: Maybe<Scalars['String']>;
};

export type ContractorConnection = {
  __typename?: 'ContractorConnection';
  edges: Array<ContractorEdge>;
  pageInfo: PageInfo;
};

export type ContractorEdge = {
  __typename?: 'ContractorEdge';
  cursor: Scalars['String'];
  node: Contractor;
};

export type Cost = {
  __typename?: 'Cost';
  yearly: Scalars['String'];
};

/** Forward projection of available budget given current costs */
export type CostBurndown = {
  __typename?: 'CostBurndown';
  burndown?: Maybe<MoneyAsOfConnection>;
  diffBurndown?: Maybe<MoneyAsOfConnection>;
};

export type CostRule = {
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  endingOn?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  ord: Scalars['Int'];
  scope: CostRuleScope;
  startingOn?: Maybe<Scalars['Long']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type CostRuleConnection = {
  __typename?: 'CostRuleConnection';
  edges: Array<CostRuleEdge>;
  pageInfo: PageInfo;
};

export type CostRuleEdge = {
  __typename?: 'CostRuleEdge';
  cursor: Scalars['String'];
  node: CostRule;
};

export type CostRuleScope = {
  __typename?: 'CostRuleScope';
  scopeType: ScopeType;
  subject?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['String']>;
};

export enum CostRuleTimeSpanType {
  Day = 'Day',
  Hour = 'Hour',
  Month = 'Month',
  Quarter = 'Quarter',
  Week = 'Week',
  Year = 'Year'
}

/** Costs incurred by the organization over a specific time interval */
export type CostsOverInterval = {
  __typename?: 'CostsOverInterval';
  cost: Money;
  interval: Interval;
};

/** Input for costs over interval query */
export type CostsOverIntervalInput = {
  diff?: InputMaybe<Scalars['Boolean']>;
  interval: IntervalInput;
  intervalType: CostRuleTimeSpanType;
  teamId?: InputMaybe<Scalars['ID']>;
};

export type CreateMemberInput = {
  assignments: Array<TeamAssignmentInputType>;
  dateOfBirth?: InputMaybe<Scalars['Long']>;
  draftId?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['Long']>;
  headcountNumber?: InputMaybe<Scalars['String']>;
  hiringManagerId?: InputMaybe<Scalars['String']>;
  jobFamilyId?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['String']>;
  memberId?: InputMaybe<Scalars['String']>;
  memberType?: InputMaybe<MemberTypeEnum>;
  name: Scalars['String'];
  openedOn?: InputMaybe<Scalars['Long']>;
  partTime?: InputMaybe<Scalars['Boolean']>;
  profilePicture?: InputMaybe<ImageInput>;
  pronouns?: InputMaybe<Scalars['String']>;
  skills: Array<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['Long']>;
  titleId?: InputMaybe<Scalars['String']>;
  workEmail?: InputMaybe<Scalars['String']>;
};

export type CreateSkillInput = {
  description?: InputMaybe<Scalars['String']>;
  draftId?: InputMaybe<Scalars['ID']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Currency = {
  __typename?: 'Currency';
  base: Scalars['Int'];
  code: Scalars['String'];
  exponent: Scalars['Int'];
};

export type DeleteMemberInput = {
  draftId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type DeleteSkillInput = {
  draftId?: InputMaybe<Scalars['ID']>;
  id: Scalars['String'];
};

/** Refers to the characteristics of the employees who work for the company. These characteristics can include age, gender, race, ethnicity, education level, job title, and other factors that can impact the diversity and makeup of the workforce. */
export type Demographics = {
  __typename?: 'Demographics';
  ethnicityRatio: Array<EthnicityRatio>;
  genderRatios: Array<GenderRatio>;
  overUnderFortyRatio: Array<AgeRatio>;
};

export type Diff = {
  __typename?: 'Diff';
  changes: Array<Scalars['String']>;
  type?: Maybe<DiffType>;
};

export enum DiffType {
  Deleted = 'Deleted',
  Modified = 'Modified',
  New = 'New'
}

/** Describes a type of entity where a change has been proposed in a scenario */
export type DraftChangeCategory = {
  __typename?: 'DraftChangeCategory';
  draftId: Scalars['ID'];
  entity: EntityType;
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Indicates whether a given user has permission to view (if user is readonly) or edit a given scenario */
export type DraftPermission = {
  __typename?: 'DraftPermission';
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  permission: Scalars['String'];
  updatedAt?: Maybe<Scalars['Long']>;
  userId: Scalars['String'];
};

/** Individual who is hired by an organization to perform work or services in exchange for compensation, such as a salary or wages. */
export type Employee = ChartRenderable & Member & {
  __typename?: 'Employee';
  SCHEMA?: Maybe<Scalars['Float']>;
  _tag?: Maybe<Scalars['String']>;
  assignableTeams: TeamConnection;
  assignments: TeamAssignmentConnection;
  can: CanCan;
  cost?: Maybe<Cost>;
  createdAt?: Maybe<Scalars['Long']>;
  dateOfBirth?: Maybe<Scalars['Long']>;
  dismissed: Scalars['Boolean'];
  draftId: Scalars['ID'];
  employeeId?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Long']>;
  ethnicity?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  homeLocationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobFamily?: Maybe<JobFamily>;
  jobFamilyId?: Maybe<Scalars['String']>;
  level?: Maybe<Level>;
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  office?: Maybe<Office>;
  officeId?: Maybe<Scalars['String']>;
  partTime: Scalars['Boolean'];
  possibleManagers: MemberConnection;
  profilePicture?: Maybe<Image>;
  pronouns?: Maybe<Scalars['String']>;
  ratingId?: Maybe<Scalars['String']>;
  reportCount?: Maybe<Scalars['Int']>;
  reports: MemberConnection;
  roleId?: Maybe<Scalars['String']>;
  skills: Array<MemberSkillLevel>;
  startDate?: Maybe<Scalars['Long']>;
  status?: Maybe<Scalars['String']>;
  teamHistory: TeamTenureConnection;
  title?: Maybe<Title>;
  titleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Long']>;
  weeklyHoursTarget: Scalars['Long'];
  workEmail?: Maybe<Scalars['String']>;
  workLocationId?: Maybe<Scalars['String']>;
};

export type EmployeeConnection = {
  __typename?: 'EmployeeConnection';
  edges: Array<EmployeeEdge>;
  pageInfo: PageInfo;
};

export type EmployeeEdge = {
  __typename?: 'EmployeeEdge';
  cursor: Scalars['String'];
  node: Employee;
};

export enum EntityType {
  Assessment = 'Assessment',
  Client = 'Client',
  ClientEngagement = 'ClientEngagement',
  Contractor = 'Contractor',
  CostRule = 'CostRule',
  Demographic = 'Demographic',
  Employee = 'Employee',
  Geo = 'Geo',
  Integration = 'Integration',
  Job = 'Job',
  JobFamily = 'JobFamily',
  Office = 'Office',
  OrgDraft = 'OrgDraft',
  Organization = 'Organization',
  Region = 'Region',
  Skill = 'Skill',
  Staff = 'Staff',
  Team = 'Team',
  TeamAssignment = 'TeamAssignment',
  TeamRole = 'TeamRole',
  TeamSection = 'TeamSection',
  TeamType = 'TeamType',
  Title = 'Title',
  Unknown = 'Unknown',
  User = 'User',
  Vendor = 'Vendor'
}

/** Percentage of people belonging to a named ethnic group */
export type EthnicityRatio = {
  __typename?: 'EthnicityRatio';
  ethnicity?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
};

export type FallibleBoolean = {
  __typename?: 'FallibleBoolean';
  errors: Array<MutationError>;
  result?: Maybe<Scalars['Boolean']>;
};

export type FallibleId = {
  __typename?: 'FallibleID';
  errors: Array<MutationError>;
  result?: Maybe<Scalars['ID']>;
};

export type FallibleMember = {
  __typename?: 'FallibleMember';
  errors: Array<MutationError>;
  result?: Maybe<Member>;
};

export type FallibleSkill = {
  __typename?: 'FallibleSkill';
  errors: Array<MutationError>;
  result?: Maybe<Skill>;
};

/** Percentage of people who belong to each gender in the system */
export type GenderRatio = {
  __typename?: 'GenderRatio';
  gender?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
};

/** An image, such as a logo or profile picture, stored in Orgspace */
export type Image = {
  __typename?: 'Image';
  draftId: Scalars['ID'];
  filePath: Scalars['String'];
  height: Scalars['Long'];
  id: Scalars['ID'];
  name: Scalars['String'];
  size: Scalars['Long'];
  thumbnailUrl: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Long'];
};

export type ImageInput = {
  filePath: Scalars['String'];
  height: Scalars['Long'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  thumbnailUrl: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Long'];
};

/** A time interval */
export type Interval = {
  __typename?: 'Interval';
  end: Scalars['DateTime'];
  interval?: Maybe<CostRuleTimeSpanType>;
  start: Scalars['DateTime'];
};

/** A time interval */
export type IntervalInput = {
  end: Scalars['DateTime'];
  interval?: InputMaybe<CostRuleTimeSpanType>;
  start: Scalars['DateTime'];
};

/** An open position that the organization is or was once hiring for. */
export type Job = ChartRenderable & Member & {
  __typename?: 'Job';
  SCHEMA?: Maybe<Scalars['Float']>;
  _tag?: Maybe<Scalars['String']>;
  assignableTeams: TeamConnection;
  assignments: TeamAssignmentConnection;
  can: CanCan;
  closedOn?: Maybe<Scalars['Long']>;
  cost?: Maybe<Cost>;
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  endDate?: Maybe<Scalars['Long']>;
  externalLink?: Maybe<Scalars['String']>;
  headcountNumber?: Maybe<Scalars['String']>;
  hiredEmployeeId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobFamily?: Maybe<JobFamily>;
  jobFamilyId?: Maybe<Scalars['String']>;
  level?: Maybe<Level>;
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  office?: Maybe<Office>;
  officeId?: Maybe<Scalars['String']>;
  openedOn?: Maybe<Scalars['Long']>;
  partTime: Scalars['Boolean'];
  possibleManagers: MemberConnection;
  reportCount?: Maybe<Scalars['Int']>;
  reports: MemberConnection;
  roleId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Long']>;
  state: JobState;
  status?: Maybe<Scalars['String']>;
  teamHistory: TeamTenureConnection;
  title?: Maybe<Title>;
  titleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Long']>;
  weeklyHoursTarget: Scalars['Long'];
  workLocationId?: Maybe<Scalars['String']>;
};

export type JobConnection = {
  __typename?: 'JobConnection';
  edges: Array<JobEdge>;
  pageInfo: PageInfo;
};

export type JobEdge = {
  __typename?: 'JobEdge';
  cursor: Scalars['String'];
  node: Job;
};

/** Job families are groups of related job titles with similar core competencies (eg Engineering, Product, Design). */
export type JobFamily = {
  __typename?: 'JobFamily';
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  levels: Array<Level>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type JobFamilyConnection = {
  __typename?: 'JobFamilyConnection';
  edges: Array<JobFamilyEdge>;
  pageInfo: PageInfo;
};

export type JobFamilyEdge = {
  __typename?: 'JobFamilyEdge';
  cursor: Scalars['String'];
  node: JobFamily;
};

/** Vacancy status for an open position */
export enum JobState {
  Closed = 'Closed',
  Filled = 'Filled',
  Open = 'Open'
}

/** A record of a financial transaction */
export type JournalEntry = {
  __typename?: 'JournalEntry';
  capex?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  cost?: Maybe<Money>;
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  endingOn?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  lineItemId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startingOn?: Maybe<Scalars['Long']>;
  transactionDate?: Maybe<Scalars['Long']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

/** Lenses help users filter and sort through org data, making it easier to find what they are looking for. */
export type Lens = {
  __typename?: 'Lens';
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  devOnly: Scalars['Boolean'];
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Long']>;
};

/** An indicator of level in a career ladder applied to a title in a job family */
export type Level = {
  __typename?: 'Level';
  level: Scalars['Int'];
  titles: TitleConnection;
};

/** Refers to an individual who is a part of an organization, or potential member in the case of an open position. Contractors, employees, and open positions are all varieties of a member */
export type Member = {
  assignableTeams: TeamConnection;
  assignments: TeamAssignmentConnection;
  can: CanCan;
  cost?: Maybe<Cost>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  jobFamily?: Maybe<JobFamily>;
  level?: Maybe<Level>;
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  office?: Maybe<Office>;
  possibleManagers: MemberConnection;
  reportCount?: Maybe<Scalars['Int']>;
  reports: MemberConnection;
  status?: Maybe<Scalars['String']>;
  teamHistory: TeamTenureConnection;
  title?: Maybe<Title>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String'];
  node: Member;
};

export type MemberFilterArgs = {
  assignableToTeam?: InputMaybe<Scalars['ID']>;
  assigned?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  memberTypes?: InputMaybe<Array<InputMaybe<MemberType>>>;
  name?: InputMaybe<Scalars['String']>;
};

/** A skill level for a member */
export type MemberSkillLevel = {
  __typename?: 'MemberSkillLevel';
  level: Scalars['Int'];
  levelName: SkillLevel;
  member: Member;
  skill: Skill;
};

export type MemberSkillLevelConnection = {
  __typename?: 'MemberSkillLevelConnection';
  edges: Array<MemberSkillLevelEdge>;
  pageInfo: PageInfo;
};

export type MemberSkillLevelEdge = {
  __typename?: 'MemberSkillLevelEdge';
  cursor: Scalars['String'];
  node: MemberSkillLevel;
};

export enum MemberType {
  Contractor = 'Contractor',
  Employee = 'Employee',
  Job = 'Job'
}

export enum MemberTypeEnum {
  Contractor = 'Contractor',
  Employee = 'Employee',
  Job = 'Job'
}

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Long'];
  currency: Currency;
  scale: Scalars['Long'];
};

/** Represents an amount of money as of a specified date */
export type MoneyAsOf = {
  __typename?: 'MoneyAsOf';
  asOf: Scalars['Long'];
  balance: Money;
  id: Scalars['String'];
  source?: Maybe<Scalars['String']>;
};

export type MoneyAsOfConnection = {
  __typename?: 'MoneyAsOfConnection';
  edges: Array<MoneyAsOfEdge>;
  pageInfo: PageInfo;
};

export type MoneyAsOfEdge = {
  __typename?: 'MoneyAsOfEdge';
  cursor: Scalars['String'];
  node: MoneyAsOf;
};

export type MutationError = {
  __typename?: 'MutationError';
  errorCode?: Maybe<MutationErrorTypeEnum>;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum MutationErrorTypeEnum {
  AuthenticationError = 'AuthenticationError',
  ForbiddenError = 'ForbiddenError',
  SyntaxError = 'SyntaxError',
  UserInputError = 'UserInputError',
  ValidationError = 'ValidationError'
}

/** An office is a physical location where one more more employees work. In Orgspace, offices are used to track how distributed a given team is using our Geospread(TM) algorithm, understand who is in a given geographic location, and provide a means for which you can do cost analysis in a manner that considers locality and region. */
export type Office = {
  __typename?: 'Office';
  archived?: Maybe<Scalars['Boolean']>;
  can: CanCan;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat: Scalars['Float'];
  long: Scalars['Float'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  stateOrProvince?: Maybe<Scalars['String']>;
  street_1?: Maybe<Scalars['String']>;
  street_2?: Maybe<Scalars['String']>;
  teams?: Maybe<TeamConnection>;
  timeZone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type OfficeConnection = {
  __typename?: 'OfficeConnection';
  edges: Array<OfficeEdge>;
  pageInfo: PageInfo;
};

export type OfficeEdge = {
  __typename?: 'OfficeEdge';
  cursor: Scalars['String'];
  node: Office;
};

/** Steps that a user takes when first signing up and using the application. */
export type Onboarding = {
  __typename?: 'Onboarding';
  completed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['Long']>;
  userId: Scalars['String'];
};

/** Refers to a graphical representation of the structure of an organization, including its various departments, positions, and reporting relationships.  */
export type OrgChart = {
  __typename?: 'OrgChart';
  availableLenses: Array<Lens>;
  data: OrgChartConnection;
  defaultNodeId: Scalars['ID'];
  draftId: Scalars['ID'];
  filter?: Maybe<OrgChartFilter>;
  id: Scalars['ID'];
  legend: OrgChartLegend;
  lens: Scalars['ID'];
  mostRelevantPerson?: Maybe<Member>;
  mostRelevantTeam?: Maybe<Team>;
  view?: Maybe<OrgChartView>;
};

export type OrgChartConnection = {
  __typename?: 'OrgChartConnection';
  edges: Array<OrgChartEdge>;
  pageInfo: PageInfo;
};

export type OrgChartEdge = {
  __typename?: 'OrgChartEdge';
  cursor: Scalars['String'];
  hasChildren: Scalars['Boolean'];
  lens?: Maybe<AppliedLens>;
  node: ChartRenderable;
};

export enum OrgChartFilter {
  All = 'ALL',
  User = 'USER'
}

export type OrgChartLegend = {
  __typename?: 'OrgChartLegend';
  draftId: Scalars['ID'];
  entries: Array<ChartLegendItem>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export enum OrgChartView {
  People = 'PEOPLE',
  Teams = 'TEAMS'
}

/** Drafts are sets of potential changes that take effect when adopted. */
export type OrgStructureDraft = {
  __typename?: 'OrgStructureDraft';
  /** Indicates whether a given user is allowed to adopt a given scenario */
  canAdopt: Scalars['Boolean'];
  /** Indicates whether a given user is allowed to view a given scenario */
  canReview: Scalars['Boolean'];
  changeNarration?: Maybe<ChangeNarration>;
  changes: Array<DraftChangeCategory>;
  createdAt?: Maybe<Scalars['Long']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  permissions: Array<DraftPermission>;
  updatedAt?: Maybe<Scalars['Long']>;
};


/** Drafts are sets of potential changes that take effect when adopted. */
export type OrgStructureDraftChangeNarrationArgs = {
  action?: InputMaybe<ChangeNarrationKind>;
  additionalContext?: InputMaybe<Scalars['String']>;
  chatGPT?: InputMaybe<Scalars['Boolean']>;
  companyName?: InputMaybe<Scalars['String']>;
  includeDismissed?: InputMaybe<Scalars['Boolean']>;
  mood?: InputMaybe<Scalars['String']>;
};

export type OrgStructureDraftConnection = {
  __typename?: 'OrgStructureDraftConnection';
  edges: Array<OrgStructureDraftEdge>;
  pageInfo: PageInfo;
};

export type OrgStructureDraftEdge = {
  __typename?: 'OrgStructureDraftEdge';
  cursor: Scalars['String'];
  node: OrgStructureDraft;
};

/** Group of individuals who work together to achieve a common goal or set of goals. */
export type Organization = {
  __typename?: 'Organization';
  SCHEMA?: Maybe<Scalars['Float']>;
  activeDraftId?: Maybe<Scalars['String']>;
  assetBalances: MoneyAsOfConnection;
  can: CanCan;
  client?: Maybe<Client>;
  clientEngagement?: Maybe<ClientEngagement>;
  clientEngagements: ClientEngagementConnection;
  clients: ClientConnection;
  contractors: ContractorConnection;
  costBurndown?: Maybe<CostBurndown>;
  costRule?: Maybe<CostRule>;
  costRules: CostRuleConnection;
  /** Costs incurred by the organization over a specific time interval */
  costsOverInterval: Array<CostsOverInterval>;
  createdAt?: Maybe<Scalars['Long']>;
  currentDraft?: Maybe<OrgStructureDraft>;
  demographics?: Maybe<Demographics>;
  draftId: Scalars['ID'];
  drafts: OrgStructureDraftConnection;
  employeeLoadedCostFactor?: Maybe<Scalars['Long']>;
  employees: EmployeeConnection;
  fiscalYearStartDay: Scalars['Long'];
  fiscalYearStartMonth: Scalars['Long'];
  history?: Maybe<OrganizationVersionConnection>;
  id: Scalars['ID'];
  integrationsEnabled?: Maybe<Scalars['Boolean']>;
  isCurrentVersion: Scalars['Boolean'];
  isDraft?: Maybe<Scalars['Boolean']>;
  jobFamilies: JobFamilyConnection;
  jobFamily?: Maybe<JobFamily>;
  jobs: JobConnection;
  lastAppliedEventId?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  managers: MemberConnection;
  member?: Maybe<Member>;
  members: MemberConnection;
  mostRecentAssetBalance?: Maybe<MoneyAsOf>;
  name: Scalars['String'];
  office?: Maybe<Office>;
  offices: OfficeConnection;
  onboardable: Scalars['Boolean'];
  onboarding?: Maybe<Onboarding>;
  orgChart: OrgChart;
  plan?: Maybe<OrgspacePlan>;
  region?: Maybe<Region>;
  regions: RegionConnection;
  rootManager?: Maybe<Member>;
  rootTeam?: Maybe<Team>;
  search: Array<SearchResult>;
  skill?: Maybe<Skill>;
  skills: SkillConnection;
  slug: Scalars['String'];
  stats?: Maybe<OrganizationStats>;
  team?: Maybe<Team>;
  teamAssignment?: Maybe<TeamAssignment>;
  teamAssignments: TeamAssignmentConnection;
  teamRole?: Maybe<TeamRole>;
  teamRoles: TeamRoleConnection;
  teamType?: Maybe<TeamType>;
  teamTypes: TeamTypeConnection;
  teams: TeamConnection;
  title?: Maybe<Title>;
  titles: TitleConnection;
  updatedAt?: Maybe<Scalars['Long']>;
  userMember?: Maybe<Member>;
  userTeams: Array<Team>;
  vendor?: Maybe<Vendor>;
  vendors: VendorConnection;
  version: Scalars['Long'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationAssetBalancesArgs = {
  sort?: InputMaybe<AssetBalanceSort>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationClientArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationClientEngagementArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationClientEngagementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ClientEngagementFilterArgs>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationCostBurndownArgs = {
  diff?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['ID']>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationCostRuleArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationCostsOverIntervalArgs = {
  input: CostsOverIntervalInput;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationDemographicsArgs = {
  diff?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['ID']>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationJobFamilyArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationMemberArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MemberFilterArgs>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationOfficeArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationOrgChartArgs = {
  filter?: InputMaybe<OrgChartFilter>;
  lens?: InputMaybe<Scalars['ID']>;
  view?: InputMaybe<OrgChartView>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationRegionArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationSearchArgs = {
  query?: InputMaybe<Scalars['String']>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationSkillArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTeamArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTeamAssignmentArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTeamAssignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamAssignmentFilter>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTeamRoleArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTeamTypeArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTeamsArgs = {
  filter?: InputMaybe<TeamFilterArgs>;
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationTitleArgs = {
  id: Scalars['ID'];
};


/** Group of individuals who work together to achieve a common goal or set of goals. */
export type OrganizationVendorArgs = {
  id: Scalars['ID'];
};

export type OrganizationStats = {
  __typename?: 'OrganizationStats';
  contractors: Scalars['Int'];
  draftId: Scalars['ID'];
  employees: Scalars['Int'];
  id: Scalars['ID'];
  jobFamilies: Scalars['Int'];
  jobs: Scalars['Int'];
  teamAssignments: Scalars['Int'];
  teamRoles: Scalars['Int'];
  teams: Scalars['Int'];
  titles: Scalars['Int'];
  users: Scalars['Int'];
  vendors: Scalars['Int'];
  version: Scalars['Int'];
};

/** Version of the organization's strategy or plan: An organization may have a strategic plan or business plan that outlines its goals */
export type OrganizationVersion = {
  __typename?: 'OrganizationVersion';
  headcount: Scalars['Int'];
  id: Scalars['ID'];
  timestamp: Scalars['Long'];
  version: Scalars['Int'];
};

export type OrganizationVersionConnection = {
  __typename?: 'OrganizationVersionConnection';
  edges: Array<OrganizationVersionEdge>;
  pageInfo: PageInfo;
};

export type OrganizationVersionEdge = {
  __typename?: 'OrganizationVersionEdge';
  cursor: Scalars['String'];
  node: OrganizationVersion;
};

/** Refers to the pricing structure and options that are available for users of a web application to access its features and services. */
export type OrgspacePlan = {
  __typename?: 'OrgspacePlan';
  cancelAtPeriodEnd: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Long']>;
  currentPeriodEnd: Scalars['Float'];
  currentPeriodStart: Scalars['Float'];
  customerId?: Maybe<Scalars['String']>;
  default_payment_method?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  priceId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  status?: Maybe<OrgspacePlanStatus>;
  trialEndDate?: Maybe<Scalars['Float']>;
  trialStartDate?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

/** Refers to the current status of a user's payment plan, which determines their access to the app's features and functionality. */
export enum OrgspacePlanStatus {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

/** Refers to the design or blueprint of how page information is structured and organized within the application's database.  */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

/** Refers to the design or blueprint of how permission sets are structured and organized within the application's database. */
export type PermissionSet = {
  __typename?: 'PermissionSet';
  Assessment: Scalars['Boolean'];
  Client: Scalars['Boolean'];
  ClientEngagement: Scalars['Boolean'];
  Contractor: Scalars['Boolean'];
  CostRule: Scalars['Boolean'];
  Demographic: Scalars['Boolean'];
  Employee: Scalars['Boolean'];
  Geo: Scalars['Boolean'];
  Integration: Scalars['Boolean'];
  Job: Scalars['Boolean'];
  JobFamily: Scalars['Boolean'];
  Office: Scalars['Boolean'];
  OrgDraft: Scalars['Boolean'];
  Organization: Scalars['Boolean'];
  Region: Scalars['Boolean'];
  Skill: Scalars['Boolean'];
  Staff: Scalars['Boolean'];
  Team: Scalars['Boolean'];
  TeamAssignment: Scalars['Boolean'];
  TeamRole: Scalars['Boolean'];
  TeamSection: Scalars['Boolean'];
  TeamType: Scalars['Boolean'];
  Title: Scalars['Boolean'];
  Unknown: Scalars['Boolean'];
  User: Scalars['Boolean'];
  Vendor: Scalars['Boolean'];
};

/** Regions describe geographic partitions of the company. */
export type Region = {
  __typename?: 'Region';
  archived: Scalars['Boolean'];
  assignableOffices: OfficeConnection;
  can: CanCan;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  offices: OfficeConnection;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type RegionConnection = {
  __typename?: 'RegionConnection';
  edges: Array<RegionEdge>;
  pageInfo: PageInfo;
};

export type RegionEdge = {
  __typename?: 'RegionEdge';
  cursor: Scalars['String'];
  node: Region;
};

export type RemoveSkillFromMemberInput = {
  draftId?: InputMaybe<Scalars['ID']>;
  memberId: Scalars['String'];
  skillId?: InputMaybe<Scalars['String']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  addSkillToMember?: Maybe<FallibleMember>;
  createMember?: Maybe<FallibleMember>;
  createSkill?: Maybe<FallibleSkill>;
  deleteMember?: Maybe<FallibleBoolean>;
  deleteSkill?: Maybe<FallibleId>;
  removeSkillFromMember?: Maybe<FallibleMember>;
};


export type RootMutationTypeAddSkillToMemberArgs = {
  input: AddSkillToMemberInput;
};


export type RootMutationTypeCreateMemberArgs = {
  input: CreateMemberInput;
};


export type RootMutationTypeCreateSkillArgs = {
  input: CreateSkillInput;
};


export type RootMutationTypeDeleteMemberArgs = {
  input: DeleteMemberInput;
};


export type RootMutationTypeDeleteSkillArgs = {
  input: DeleteSkillInput;
};


export type RootMutationTypeRemoveSkillFromMemberArgs = {
  input: RemoveSkillFromMemberInput;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  account: Account;
  organization: Organization;
};


export type RootQueryTypeOrganizationArgs = {
  draftId?: InputMaybe<Scalars['ID']>;
  view?: InputMaybe<OrgChartView>;
};

export enum ScopeType {
  Global = 'Global',
  JobFamily = 'JobFamily',
  Member = 'Member',
  TeamRole = 'TeamRole',
  Title = 'Title'
}

/** Search Document */
export type SearchDocument = {
  __typename?: 'SearchDocument';
  as?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  entity: Scalars['String'];
  href: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Search Result */
export type SearchResult = {
  __typename?: 'SearchResult';
  item: SearchDocument;
  refIndex: Scalars['Int'];
  score?: Maybe<Scalars['Float']>;
};

/** Abilities and knowledge that employees bring to the table to help the organization achieve its goals. */
export type Skill = {
  __typename?: 'Skill';
  can: CanCan;
  children: SkillConnection;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  members?: Maybe<MemberSkillLevelConnection>;
  name: Scalars['String'];
  parents: Array<Skill>;
  stub: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['Long']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  edges: Array<SkillEdge>;
  pageInfo: PageInfo;
};

/** A property of a team that indicates that a particular skill is desired for proper staffing, at a particular quantity */
export type SkillDesire = {
  __typename?: 'SkillDesire';
  desired: Scalars['Int'];
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  present: Scalars['Int'];
  skill: Skill;
  team: Team;
};

export type SkillDesireConnection = {
  __typename?: 'SkillDesireConnection';
  edges: Array<SkillDesireEdge>;
  pageInfo: PageInfo;
};

export type SkillDesireEdge = {
  __typename?: 'SkillDesireEdge';
  cursor: Scalars['String'];
  node: SkillDesire;
};

export type SkillEdge = {
  __typename?: 'SkillEdge';
  cursor: Scalars['String'];
  node: Skill;
};

export enum SkillLevel {
  Advanced = 'Advanced',
  Aspiring = 'Aspiring',
  Beginner = 'Beginner',
  Expert = 'Expert',
  Proficient = 'Proficient'
}

/** A team is a group of people working together on a shared problem. */
export type Team = ChartRenderable & {
  __typename?: 'Team';
  allParents: Array<Team>;
  amountRemaining: Money;
  archived: Scalars['Boolean'];
  assignments: TeamAssignmentConnection;
  averageTenure: Scalars['Float'];
  budget?: Maybe<Budget>;
  can: CanCan;
  children: Array<Team>;
  clientEngagementId?: Maybe<Scalars['String']>;
  costBurndown?: Maybe<CostBurndown>;
  createdAt?: Maybe<Scalars['Long']>;
  currentBudget: Array<Budget>;
  /** The current capex forecast. If no current one is found, the most recent one will be returned. Use asOf timestamp to set the time span - will return the most recent forecast starting before that date */
  currentCapexForecast?: Maybe<CapexMix>;
  demographics?: Maybe<TeamDemographics>;
  diff?: Maybe<Diff>;
  draftId: Scalars['ID'];
  hasSufficientBudget: Scalars['Boolean'];
  id: Scalars['ID'];
  memberCount: Scalars['Int'];
  members?: Maybe<MemberConnection>;
  name: Scalars['String'];
  offices: Array<Office>;
  openPositions: Scalars['Int'];
  ord?: Maybe<Scalars['Long']>;
  organizationId?: Maybe<Scalars['String']>;
  parent?: Maybe<Team>;
  parentId?: Maybe<Scalars['String']>;
  possibleParents: Array<Team>;
  /** The prior capex forecast. If no current one is found, the most recent one will be returned. Use asOf timestamp to set the time span - will return the most recent forecast ending before that date */
  priorCapexForecast?: Maybe<CapexMix>;
  purpose?: Maybe<Scalars['String']>;
  realizedCosts: Array<JournalEntry>;
  sections: Array<TeamSection>;
  skills?: Maybe<SkillDesireConnection>;
  teamBudgetDifference: Money;
  teamDispersedness?: Maybe<Scalars['Float']>;
  teamType?: Maybe<TeamType>;
  teamTypeId?: Maybe<Scalars['String']>;
  unstaffedCount: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Long']>;
  warnings: Array<TeamWarning>;
};


/** A team is a group of people working together on a shared problem. */
export type TeamCostBurndownArgs = {
  diff?: InputMaybe<Scalars['Boolean']>;
};

/** Percentage of people under 40 to people over 40 within a given team */
export type TeamAgeRatio = {
  __typename?: 'TeamAgeRatio';
  overFortyStatus?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
};

/** Refers to the process of assigning individuals to a particular team or group for a specific task or project */
export type TeamAssignment = {
  __typename?: 'TeamAssignment';
  allocation: Scalars['Long'];
  archived: Scalars['Boolean'];
  assigneeId?: Maybe<Scalars['String']>;
  assignmentType: TeamAssignmentType;
  can: CanCan;
  createdAt?: Maybe<Scalars['Long']>;
  diff?: Maybe<DiffType>;
  draftId: Scalars['ID'];
  endDate?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  member?: Maybe<Member>;
  office?: Maybe<Office>;
  ord: Scalars['Long'];
  region?: Maybe<Region>;
  role?: Maybe<TeamRole>;
  startDate?: Maybe<Scalars['Long']>;
  team?: Maybe<Team>;
  teamId: Scalars['String'];
  teamRole?: Maybe<Scalars['String']>;
  teamSectionId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['Long']>;
};

export type TeamAssignmentConnection = {
  __typename?: 'TeamAssignmentConnection';
  edges: Array<TeamAssignmentEdge>;
  pageInfo: PageInfo;
};

export type TeamAssignmentEdge = {
  __typename?: 'TeamAssignmentEdge';
  cursor: Scalars['String'];
  node: TeamAssignment;
};

export type TeamAssignmentFilter = {
  assignmentType?: InputMaybe<Scalars['String']>;
  jobFamilies?: InputMaybe<Array<Scalars['ID']>>;
  memberName?: InputMaybe<Scalars['String']>;
  memberTypes?: InputMaybe<Array<InputMaybe<MemberType>>>;
  members?: InputMaybe<Array<Scalars['ID']>>;
  offices?: InputMaybe<Array<Scalars['ID']>>;
  regions?: InputMaybe<Array<Scalars['ID']>>;
  skills?: InputMaybe<Array<Scalars['ID']>>;
  teamTypes?: InputMaybe<Array<Scalars['ID']>>;
  teams?: InputMaybe<Array<Scalars['ID']>>;
  titles?: InputMaybe<Array<Scalars['ID']>>;
};

/** Input value of a team assignment, used for creating new assignments */
export type TeamAssignmentInputType = {
  allocation: Scalars['Long'];
  archived?: InputMaybe<Scalars['Boolean']>;
  assigneeId?: InputMaybe<Scalars['String']>;
  assignmentType: TeamAssignmentType;
  createdAt?: InputMaybe<Scalars['Long']>;
  endDate?: InputMaybe<Scalars['Long']>;
  ord?: InputMaybe<Scalars['Long']>;
  startDate?: InputMaybe<Scalars['Long']>;
  teamId: Scalars['String'];
  teamRole?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Long']>;
};

/** Team assignment types refer to the different ways in which teams can be structured within an organization. */
export enum TeamAssignmentType {
  Assignment = 'Assignment',
  Leadership = 'Leadership',
  Membership = 'Membership',
  Unstaffed = 'Unstaffed'
}

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  pageInfo: PageInfo;
};

/** Refers to the characteristics of the employees who work for the team. These characteristics can include age, gender, race, ethnicity, education level, job title, and other factors that can impact the diversity and makeup of the workforce. */
export type TeamDemographics = {
  __typename?: 'TeamDemographics';
  ethnicityRatio: Array<TeamEthnicityRatio>;
  genderRatios: Array<TeamGenderRatio>;
  overUnderFortyRatio: Array<TeamAgeRatio>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  cursor: Scalars['String'];
  node: Team;
};

/** Percentage of people belonging to a named ethnic group within a given team */
export type TeamEthnicityRatio = {
  __typename?: 'TeamEthnicityRatio';
  ethnicity?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
};

export type TeamFilterArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  includeInactive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  teamTypes?: InputMaybe<Array<Scalars['ID']>>;
};

/** Percentage of people who belong to each gender in the system within a specific team */
export type TeamGenderRatio = {
  __typename?: 'TeamGenderRatio';
  gender?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['Float']>;
};

/** Roles describe a person's responsibilities on a team (eg Frontend, Devops, Quality, UX, Product). */
export type TeamRole = {
  __typename?: 'TeamRole';
  _tag?: Maybe<Scalars['String']>;
  can: CanCan;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Long']>;
};

export type TeamRoleConnection = {
  __typename?: 'TeamRoleConnection';
  edges: Array<TeamRoleEdge>;
  pageInfo: PageInfo;
};

export type TeamRoleEdge = {
  __typename?: 'TeamRoleEdge';
  cursor: Scalars['String'];
  node: TeamRole;
};

/** A team section is where assignments are placed in teams. Typically leadership and/or membership */
export type TeamSection = {
  __typename?: 'TeamSection';
  assignmentType: TeamAssignmentType;
  assignments: Array<TeamAssignment>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  teamId: Scalars['ID'];
};

/** Refers to the length of time that a team has been together, or the duration of their collaboration on a specific project or task. */
export type TeamTenure = {
  __typename?: 'TeamTenure';
  allocation: Scalars['Long'];
  assignment?: Maybe<TeamAssignment>;
  assignmentId: Scalars['String'];
  draftId: Scalars['ID'];
  endDate?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  member?: Maybe<Member>;
  memberId: Scalars['String'];
  role?: Maybe<TeamRole>;
  roleId?: Maybe<Scalars['String']>;
  roleName?: Maybe<Scalars['String']>;
  startDate: Scalars['Long'];
  team?: Maybe<Team>;
  teamId: Scalars['String'];
  teamName: Scalars['String'];
  teamSection: TeamAssignmentType;
};

export type TeamTenureConnection = {
  __typename?: 'TeamTenureConnection';
  edges: Array<TeamTenureEdge>;
  pageInfo: PageInfo;
};

export type TeamTenureEdge = {
  __typename?: 'TeamTenureEdge';
  cursor: Scalars['String'];
  node: TeamTenure;
};

/** Team types describe different styles and responsibilities of teams */
export type TeamType = {
  __typename?: 'TeamType';
  billable?: Maybe<Scalars['Boolean']>;
  can: CanCan;
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Long']>;
};

export type TeamTypeConnection = {
  __typename?: 'TeamTypeConnection';
  edges: Array<TeamTypeEdge>;
  pageInfo: PageInfo;
};

export type TeamTypeEdge = {
  __typename?: 'TeamTypeEdge';
  cursor: Scalars['String'];
  node: TeamType;
};

export enum TeamWarning {
  Underskilled = 'Underskilled',
  Understaffed = 'Understaffed'
}

/** Job titles describe a person's position and seniority (eg Junior Engineer, VP of Product). */
export type Title = {
  __typename?: 'Title';
  SCHEMA?: Maybe<Scalars['Float']>;
  can: CanCan;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  jobFamily?: Maybe<JobFamily>;
  jobFamilyId?: Maybe<Scalars['String']>;
  level: Scalars['Long'];
  name: Scalars['String'];
  roleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type TitleConnection = {
  __typename?: 'TitleConnection';
  edges: Array<TitleEdge>;
  pageInfo: PageInfo;
};

export type TitleEdge = {
  __typename?: 'TitleEdge';
  cursor: Scalars['String'];
  node: Title;
};

/** Refers to the design or blueprint of how Orgspace user data is organized and structured within the application's database. */
export type User = {
  __typename?: 'User';
  access_token?: Maybe<Scalars['ID']>;
  can: Can;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  role?: Maybe<AclRole>;
};

/** Refers to a person, company, or organization that provides goods or services to the organization in exchange for payment. */
export type Vendor = {
  __typename?: 'Vendor';
  can: CanCan;
  contractors: ContractorConnection;
  createdAt?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  draftId: Scalars['ID'];
  id: Scalars['ID'];
  logo?: Maybe<Image>;
  name: Scalars['String'];
  pointOfContact?: Maybe<Contractor>;
  pointOfContactId?: Maybe<Scalars['String']>;
  pointOfContactName?: Maybe<Scalars['String']>;
  staffCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Long']>;
};

export type VendorConnection = {
  __typename?: 'VendorConnection';
  edges: Array<VendorEdge>;
  pageInfo: PageInfo;
};

export type VendorEdge = {
  __typename?: 'VendorEdge';
  cursor: Scalars['String'];
  node: Vendor;
};


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;