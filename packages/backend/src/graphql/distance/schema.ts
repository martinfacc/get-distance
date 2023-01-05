export default `#graphql
  type GeoLocation {
    latitude: Float
    longitude: Float
  }

  type Distance {
    distance: Int
    text: String
    end: GeoLocation
    start: GeoLocation
  }

  type Query {
    getDistance(from: String!, to: String!, apiKey: String!): Distance
  }
`
