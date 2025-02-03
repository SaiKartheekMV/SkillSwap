exports.initiateCall = async (req, res) => {
    res.json({ message: "Video call initiated", roomId: req.body.roomId });
};

