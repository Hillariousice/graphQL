"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listingModel_1 = require("../../model/listingModel");
const ListingResolver = {
    Query: {
        allListings: async () => {
            try {
                const listing = await listingModel_1.Listing.find({});
                return listing;
            }
            catch (err) {
                console.log(err);
            }
        },
        singleListing: async (_, args) => {
            try {
                const listingOne = await listingModel_1.Listing.findById(args.id);
                return listingOne;
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    Mutation: {
        createListing: async (_, args) => {
            try {
                const newListing = {
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numsOfBeds: args.input.numsOfBeds,
                    numsOfBaths: args.input.numsOfBaths,
                    rating: args.input.rating
                };
                const listings = await listingModel_1.Listing.create(newListing);
                if (listings) {
                    return listings;
                }
            }
            catch (err) {
            }
        },
        updateListing: async (_, args) => {
            try {
                const id = args.input.id;
                const updateListing = {
                    id: args.input.id,
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numsOfBeds: args.input.numsOfBeds,
                    numsOfBaths: args.input.numsOfBaths,
                    rating: args.input.rating
                };
                const updateNew = await listingModel_1.Listing.findByIdAndUpdate(id, updateListing);
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        deleteListing: async (_, args) => {
            try {
                const deleteOne = await listingModel_1.Listing.findOneAndDelete({ _id: args.id });
                if (deleteOne) {
                    return { message: "Id deleted" };
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
};
exports.default = ListingResolver;
