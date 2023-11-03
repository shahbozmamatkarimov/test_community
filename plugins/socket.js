import io from "socket.io-client";

// const runtime = useRuntimeConfig();
// const baseUrl = runtime.public.baseURL;
const BASE_URL = process.env.BASE_URL

const socket = io(BASE_URL); // Replace with your Socket.IO server URL
// const socket = io("http://localhost:4000"); // Replace with your Socket.IO server URL

export default socket;