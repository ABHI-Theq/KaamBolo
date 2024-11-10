import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useContext } from 'react';
import useAuthContext from './AuthContext.js'
// Socket Context
const SocketContext = createContext();

const useSocketContext=()=>{
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers]=useState([])
    const {authUser}=useAuthContext()
    useEffect(() => {
        if(authUser){
            const socket=io('http://localhost:5000',{
                query:{
                    userId:authUser._id
                }
            });
            setSocket(socket);

            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users);
            })
            return ()=>socket.close();
        }else{
            if(socket){
                socket.close()
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default useSocketContext;
