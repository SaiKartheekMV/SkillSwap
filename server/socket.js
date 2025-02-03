const { Server } = require("socket.io");
function setupSocket(server) {
    const io = new Server(server, { cors: { origin: "*" } });
    io.on("connection", (socket) => {
        console.log("User connected: " + socket.id);
        socket.on("sendMessage", (data) => {
            io.to(data.receiverId).emit("receiveMessage", data);
        });
        socket.on("joinRoom", (room) => {
            socket.join(room);
        });
        socket.on("startVideoCall", (data) => {
            io.to(data.room).emit("videoCallStarted", data);
        });
    });
}
module.exports = { setupSocket };