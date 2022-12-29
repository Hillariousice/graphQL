import { gql } from "apollo-server";


const typeDef = gql`

type Listing{
    id:ID,
    title:String,
    image:String,
    address:String,
    price:Int,
    numsOfBeds:Int,
    numsOfBaths:Int,
    rating:Int
}

input CreateListingInput{
    title:String!,
    image:String!,
    address:String!,
    price:Int!,
    numsOfBeds:Int!,
    numsOfBaths:Int!,
    rating:Int!
}

input UpdateListingInput{
    id:ID!
    title:String,
    image:String,
    address:String,
    price:Int,
    numsOfBeds:Int,
    numsOfBaths:Int,
    rating:Int
}
type Message{
    message:String
}

type Query{
    allListings:[Listing]!
    singleListing(id:ID!):Listing
}
type Mutation{
    createListing(input:CreateListingInput):Listing
    updateListing(input:UpdateListingInput):Listing
    deleteListing(id:ID!):Message!
}
`

export default typeDef