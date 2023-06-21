const faker = require("faker")
module.exports = () => {
    const data ={slider:[]}
    for (let i = 0; i < 3; i++) {
        data.slider.push({
            id:faker.datatype.uuid()
        })
         
    }
    return data
}
