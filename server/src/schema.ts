import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's thumbnail image URL"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's description"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "Track's complete array of Modules"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's duration in minutes"
    length: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }
`;
