const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    googleID: String,
    fullName: String,
    avatar: {
      type: String,
      default: "https://i.ya-webdesign.com/images/avatar-icon-png-5.png"
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;