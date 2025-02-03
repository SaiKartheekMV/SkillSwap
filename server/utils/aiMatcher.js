const User = require("../models/User");
exports.findBestMentors = async (user) => {
    return await User.find({
        role: { $in: ["mentor", "both"] },
        skills: { $in: user.interests },
    }).sort({ rating: -1 });
};
