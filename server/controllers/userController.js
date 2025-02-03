const User = require("../models/User");
const aiMatcher = require("../utils/aiMatcher");
exports.recommendMentors = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        const mentors = await aiMatcher.findBestMentors(user);
        res.json(mentors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};