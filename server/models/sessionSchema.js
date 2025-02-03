const sessionSchema = new mongoose.Schema({
    learner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    skill: String,
    status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
    scheduledDate: Date,
});
module.exports = mongoose.model("Session", sessionSchema);