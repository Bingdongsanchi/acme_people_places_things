const {db, People, Places, Things} = require('./db');

const seedDB = async () => {
    // Connects your your database
    // and clears everything out
    await db.sync({ force: true, logging: false });

    const moe = await People.create({
        name: "Moe"});
    const topher = await People.create({
        name: "Topher"});
    const lena = await People.create({
        name: "Lena"});
    const pdx =await Places.create({
        name: "PDX"});
    const nyc =await Places.create({
        name: "NYC"});
    const london =await Places.create({
        name: "London"});
    const shirt =await Things.create({
        name: "Shirt"});
    const iphone =await Things.create({
        name: "Iphone"});
    const coffee =await Things.create({
        name: "Coffee"});
    };
    seedDB();