// const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize("postgres://localhost/acme_people_places_things")


const People = db.define('people', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Places = db.define('places', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Things = db.define('things', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// const syncAndSeed = async () => {
//     await db.sync({force: true})
// }
    


module.exports = {db, People, Places, Things}