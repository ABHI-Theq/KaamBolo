import { Server } from "socket.io";
import http from "http";
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
});

// A map to store userId to socketId mapping
const userSocketMap = {};  // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

// When a new user connects
io.on('connection', (socket) => {
    // Retrieve the userId from the query parameters of the handshake
    const userId = socket.handshake.query.userId;

    if (userId !== "undefined") {
        // Store the socketId for the userId
        userSocketMap[userId] = socket.id;
        
        // Emit an event to send the current online users list to all clients
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    }

    // Listen for the 'disconnect' event to handle user disconnection
    socket.on('disconnect', () => {
        if (userId) {
            // Remove the userId from the userSocketMap
            delete userSocketMap[userId];
            
            // Emit an event to send the updated online users list to all clients
            io.emit('getOnlineUsers', Object.keys(userSocketMap));
        }
    });
});

// Export the app, io instance, and server
export { app, io, server };
