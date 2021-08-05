const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true, min: 6, max: 255 },
    password: { type: String, required: true, min: 6, max: 255 },
    validated: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }],
    versionKey: false
});

UserSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))

};

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);