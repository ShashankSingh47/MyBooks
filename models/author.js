const mongoose = require('mongoose')

const auhtorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
}
})

module.exports = mongoose.model('Author', auhtorSchema)