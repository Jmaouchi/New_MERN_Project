const {User, Thought } = require('../models')

// Resolvers do work in a similar fashion to how a controller file works. So here we can where we can call our queries or mutaions 
const resolvers = {
    Query: {
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('thoughts')
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('thoughts');
      },
      thoughts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      thought: async (parent, { _id }) => {
        return Thought.findOne({ _id });
      }
    },

    // Mutations to post update and delete data on database 
    mutation: {
    
    }
  }


module.exports = resolvers;