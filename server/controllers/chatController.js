const Message = require("../models/Message");
exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, content } = req.body;
        const message = new Message({ sender, receiver, content });
        await message.save();
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};