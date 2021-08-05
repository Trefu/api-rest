const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
    {
        name: String
    },
    {
        versionKey: String
    }
)

module.exports = mongoose.model('Role', RoleSchema);