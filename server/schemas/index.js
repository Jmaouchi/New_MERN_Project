// call the typeDefs and the resolvers to be able to use them on the server.js file and be able to retrieve the data 
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');;


// export the queries and reslovers to be called on server.js
module.exports = { typeDefs, resolvers };