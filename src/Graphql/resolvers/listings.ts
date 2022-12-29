import {Listing, ListingType} from '../../model/listingModel'
import { ArgForUpdateListing, CreateListing, DeleteListing, ArgForListing, UpdateListing } from './type'

const ListingResolver ={
    Query:{
        allListings: async()=>{
            try{
                const listing = await Listing.find({})
                return listing
            }catch(err){
                console.log(err)
            }
        },
        singleListing: async(_:unknown,args:ArgForListing)=>{
            try{
                
                const listingOne = await Listing.findById(args.id)
                return listingOne
            }catch(err){
                console.log(err)
            }
        },
    },
    Mutation:{
        createListing:async(_:unknown,args:CreateListing)=>{
            try{
                const newListing = {
                    title:args.input.title,
                    image:args.input.image,
                    address:args.input.address,
                    price:args.input.price,
                    numsOfBeds:args.input.numsOfBeds,
                    numsOfBaths:args.input.numsOfBaths,
                    rating:args.input.rating
                }
                const listings = await Listing.create(newListing)
                if(listings){
                    return listings
                }
            }catch(err){

            }
        },
         updateListing:async(_:unknown,args:UpdateListing)=>{
           try{
          const id = args.input.id
          const updateListing={
                    id : args.input.id,
                    title:args.input.title,
                    image:args.input.image,
                    address:args.input.address,
                    price:args.input.price,
                    numsOfBeds:args.input.numsOfBeds,
                    numsOfBaths:args.input.numsOfBaths,
                    rating:args.input.rating
          }
          const updateNew = await Listing.findByIdAndUpdate(id,updateListing)
          if(updateNew){
            return updateNew
        }
           }catch(err){
            console.log(err)
           }
         },
         deleteListing: async(_:unknown,args:DeleteListing)=>{
            try{
                
                const deleteOne =await Listing.findOneAndDelete({_id:args.id})
                if(deleteOne){
                    return {message:"Id deleted"}
                }
            }catch(err){
                console.log(err)
            }
         } 
    }
}

export default ListingResolver