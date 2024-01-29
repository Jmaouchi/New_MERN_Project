// import the gql template function 
const {gql} = require('apollo-server-express')

// create our typeDefs 
// we have queries and mutations, query is to get the data and mutaions is when we post delete or update data 
const typeDefs = gql`

  type User{
    _id: ID,
    username: String,
    email: String,
    password: String,
    thoughts: [Thought]
  }

  type Thought{
    _id: ID,
    thoughtText: String,
    createdAt: String,
    username: [User]
  }


  type Query {
    users: [User]
    user(username: String!): User
    thoughts: [Thought]
    oneThought(_id: ID!): [Thought]
  }
`

// export typeDefs 
module.exports = typeDefs