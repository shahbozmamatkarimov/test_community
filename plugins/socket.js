import io from "socket.io-client";

const socket = io("https://testzone-xc93.onrender.com"); // Replace with your Socket.IO server URL
// const socket = io("http://localhost:4000"); // Replace with your Socket.IO server URL

export default socket;