module.exports = {
    getHouse: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.getHouses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send('was not able to get houses from database')
        })
    },

    addHouse: (req, res) => {
        const dbInstance = req.app.get('db')
        
        const {name, address, city, state, zip} = req.body
        console.log('this is name of house', name)

        dbInstance.addHouse([name, address, city, state, zip])
        .then(()=> res.status(200).send('just added a house to database'))
        .catch(err => {
            res.status(500).send('was not able to add house to database')
        })

    }
}