import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import distanceResolvers from './distance/resolvers'
import distanceSchema from './distance/schema'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars'

export const typeDefs = mergeTypeDefs([distanceSchema, scalarTypeDefs])

export const resolvers = mergeResolvers([distanceResolvers])
