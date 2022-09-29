const db = require('./connection');
// const { Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        // { name: 'Concessions' },
        // { name: 'Tables, Linens, and Chairs' },
        // { name: 'Slides' },
        // { name: 'Plates, Glassware, and Silverware' },
        // { name: 'Tents' }
    ]);

    console.log('categories seeded');
})