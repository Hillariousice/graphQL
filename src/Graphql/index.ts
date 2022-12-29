import ListingResolver from './resolvers/listings'

export default{
    Query:{
        ...ListingResolver.Query
    },
    Mutation:{
        ...ListingResolver.Mutation
    }
}