// OnlineUsers.js
import React from 'react';
import useSocketContext from "../context/SocketContext";

const OnlineUsers = () => {
    const { onlineusers } = useSocketContext();

    return (
        <div className="flex flex-wrap gap-4">
            {onlineusers && onlineusers.length > 0 ? (
                onlineusers.map((user) => (
                    <div key={user.email} className="w-60 bg-white shadow-lg rounded-lg p-4 text-center">
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl">
                                {user.name[0].toUpperCase()}
                            </div>
                        </div>
                        <div className="text-lg font-semibold">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-sm text-gray-600 mt-2">{user.role}</div>
                    </div>
                ))
            ) : (
                <div className="text-gray-500">No users online</div>
            )}
        </div>
    );
};

export default OnlineUsers;
