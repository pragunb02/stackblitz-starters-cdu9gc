import mongoose from 'mongoose';

// object passed // new ??
const userSchems = new mongoose.Schema(
  {
    // username: String,
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    isActive: Boolean,
    password: {
      type: String,
      required: [true, 'password is require'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

// User->users // lower plural  interview
