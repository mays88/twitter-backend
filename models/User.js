import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "A User must have a username"],
        minLength: 3,
        maxLength: 20,
    },
});

userSchema.index({ username: 1 });

export const User = mongoose.model("User", userSchema);
