const {User, Thought } = require('../models')

// Resolvers do work in a similar fashion to how a controller file works. So here we can where we can call our queries or mutaions 
const resolvers = {

  Query: {
    // this is a query that is been created on typeDefs ( to get data from the server GET request )
    users: async () => {
      return User.find()
      .populate('thoughts')
    },

    user: async (parent, {username}) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('thoughts')
    },

    thoughts: async () => {
      // Find all Thoughts and sort them by date ( newest to oldest )
      return Thought.find().sort({createdAt: -1});
    },

    oneThought: async (parent, {_id}) => {
      return Thought.findOne({_id})
      .select('-__v ')
      .populate('user')
    }
  }

  // resolvers: {
    
  // }
};

module.exports = resolvers;