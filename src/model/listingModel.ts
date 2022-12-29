import mongoose, { Schema } from "mongoose";

export interface ListingType{
    _id:string,
    title:string,
    image:string,
    address:string,
    price:number,
    numsOfBeds:number,
    numsOfBaths:number,
    rating:number
}
const ListingSchema = new Schema({
    title:{type:String},
    image:{type:String},
    address:{type:String},
    price:{type:Number},
    numsOfBeds:{type:Number},
    numsOfBaths:{type:String,},
    rating:{type:Number}
},
    {timestamps:true}
)
export const Listing = mongoose.model<ListingType>("Listing",ListingSchema)
