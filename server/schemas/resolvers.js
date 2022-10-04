const { AuthenticationError } = require('apollo-server-express');
const { Product, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        // order: async (parent, { _id }, context) => {
        //     if (context.user)
        // },

    },
    // Mutation: {
    //     addOrder: async (parent, { products }, context) => {
    //         console.log(context);
    //         if (context.user) {
    //             const user
    //         }
    //     }
    // }
}