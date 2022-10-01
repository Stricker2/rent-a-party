const db = require('./connection');
const { Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Concessions' },
        { name: 'Tables, Linens, and Chairs' },
        { name: 'Slides' },
        { name: 'Plates, Glassware, and Silverware' },
        { name: 'Tents' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Small Tent',
            description:
                'Standard 20x20 tent. Smallest size available.',
            image: '#',
            category: cateogories[4]._id,
            price: 200.00,
            quantity: 20
        },
        {
            name: 'Large Tent',
            description:
                'Standard 20x40 tent. Largest size available.',
            image: '#',
            category: categories[4]._id,
            price: 300.00,
            quantity: 10
        },
        {
            name: 'Snow Cone Machine',
            description:
                'Snow cone machine. Rental of this equipment includes 5 syrups (Cherry, Blue Raspberry, Grape, Green Apple, and Mango). NOTE:A liability form will need to be signed if you plan on operating the machine yourself without the assitance of a event employee (Event employee not included in this price).',
            image: '#',
            category: categories[0]._id,
            price: 150.00,
            quantity: 5
        },
        {
            name: 'Cotton Candy Machine',
            description:
                'Standard Cotton candy machine. A liability form will need to be signed if you plan on operating the machine yourself without the assitance of a event employee (Event employee not included in this price).',
            image: '#',
            category: categories[0]._id,
            price: 150.00,
            quantity: 5
        },
        {
            name: 'Rectagular Table',
            description:
                '6ft rectagular wooden table with collapsable legs.',
            image: '#',
            category: categories[1]._id,
            price: 50.00,
            quantity: 50
        },
        {
            name: 'Round Table',
            description:
                '5ft round wooden table with collapsable legs.',
            image: '#',
            category: categories[1]._id,
            price: 50.00,
            quantity: 50
        },
        {
            name: 'Black Folding Chairs',
            description:
                'Black folding chairs',
            image: '#',
            category: categories[1]._id,
            price: 5.00,
            quantity: 100
        },
        {
            name: 'White Folding Table',
            description:
                'White folding chairs',
            image: '#',
            category: categories[1]._id,
            price: 5.00,
            quantity: 100
        },
        {
            name: 'Round Tablecloths',
            description:
                'Large white tablecloths able to cover our round tables.',
            image: '#',
            category: categories[1]._id,
            price: 20.00,
            quantity: 50
        },
        {
            name: 'Rectangular Tablecloths',
            description:
                'Large white tablecloths able to cover our rectangular tables.',
            image: '#',
            category: categories[1]._id,
            price: 20.00,
            quantity: 50
        },
        {
            name: 'Dry Slide',
            description:
                'Inflatable, 18ft tall dry slide.',
            image: '#',
            category: categories[2]._id,
            price: 300.00,
            quantity: 5
        },
        {
            name: 'Water Slide',
            description:
                'Inflatable, 18ft tall water slide.',
            image: '#',
            category: categories[2]._id,
            price: 350.00,
            quantity: 5
        },
        {
            name: 'Drinkware',
            description:
                'Set of a dozen 12oz cups',
            image: '#',
            category: categories[3]._id,
            price: 2.00,
            quantity: 75
        },
        {
            name: 'Plates',
            description:
                'Set of 6 plates.',
            image: '#',
            category: categories[3]._id,
            price: 2.00,
            quantity: 75
        },
        {
            name: 'Plasticware',
            description:
                'Set of 24 forks, knives, and spoons.',
            image: '#',
            category: categories[3]._id,
            price: 5.00,
            quantity: 75
        }
    ]);

    console.log('products seeded');

    process.exit();
});