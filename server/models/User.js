const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    skills: [String],
    bio: String,
    interests: [String],
    role: { type: String, enum: ["learner", "mentor", "both"], default: "both" },
    rating: { type: Number, default: 0 },
    profilePicture: String
});
module.exports = mongoose.model("User", userSchema);