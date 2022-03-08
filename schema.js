const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    launches: [Launch]!
  }

  type Launch {
    id: ID!
  }
`;

module.exports = typeDefs;
