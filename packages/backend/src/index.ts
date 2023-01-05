import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs, resolvers } from './graphql'

dotenv.config()

const { APP_PORT = '4000', FRONT_PATH = '' } = process.env

const app = express()

const executableSchema = makeExecutableSchema({ typeDefs, resolvers })

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: executableSchema
  })
)

app.use(express.static(path.join(__dirname, FRONT_PATH)))

app.get('/*', (_, response) => {
  response.sendFile(path.join(__dirname, FRONT_PATH, 'index.html'))
})

app.listen(APP_PORT, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}`)
})
