// import { io } from "socket.io-client";

// export const initSocket = async () => {
//   const options = {
//     "force new connection": true,
//     reconnectionAttempt: "Infinity",
//     timeout: 10000,
//     transports: ["websocket"],
//   };
//   return io(process.env.REACT_APP_BACKEND_URL, options);
// };
import { io } from "socket.io-client";

// Socket initialization
export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  return io("https://realtime-csbs-code-editor.onrender.com/", options);
};
