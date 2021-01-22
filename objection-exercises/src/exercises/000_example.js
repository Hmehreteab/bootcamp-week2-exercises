const cleanup = require('../lib/cleanup')
const User = require('../lib/cleanup')



const instanceUser = async () => {
    try {
        const exampleTRX = await User.transaction(async trx => {
            const helen = await User.query(trx)
            .insert({
                email: 'helumehreteab@gmail.com', 
                firstName: 'Helen', 
                lastName: 'Mehreteab',
                age: 19
            }).returning('*')
            const pet = await helen.$relatedQuery('pets', trx)
            .insert({type: 'DOG', name: 'Shep'})
            return pet
        })
        // await User.query
        // .insert({
        //     email: 'helumehreteab@gmail.com', 
        //     firstName: 'Helen', 
        //     lastName: 'Mehreteab',
        //     age: 19
        // })
        // const helen = await User.query().findOne('firstName', 'Helen')
       
        
        // await helen.$query().patch({lastName: 'Musie'})
        cleanup()
    } catch (err) {
        console.log(err)
    }
}

    instanceUser()