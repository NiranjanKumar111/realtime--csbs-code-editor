// import React, { useState } from "react";
// import { v4 as uuidV4 } from "uuid";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const [roomId, setRoomId] = useState("");
//   const [username, setUsername] = useState("");
//   const createNewRoom = (e) => {
//     e.preventDefault();
//     const id = uuidV4();
//     setRoomId(id);
//     toast.success("Created a new room");
//   };

//   const joinRoom = () => {
//     if (!roomId || !username) {
//       toast.error("ROOM ID & username is required");
//       return;
//     }

//     // Redirect
//     navigate(`/editor/${roomId}`, {
//       state: {
//         username,
//       },
//     });
//   };

//   const handleInputEnter = (e) => {
//     if (e.code === "Enter") {
//       joinRoom();
//     }
//   };
//   return (
//     <div className="homePageWrapper">
//       <div className="formWrapper">
//         <img
//           className="homePageLogo"
//           src="/nsec-csbs.png"
//           alt="nsec-csbs-logo"
//         />
//         <h4 className="mainLabel">Paste invitation ROOM ID</h4>
//         <div className="inputGroup">
//           <input
//             type="text"
//             className="inputBox"
//             placeholder="ROOM ID"
//             onChange={(e) => setRoomId(e.target.value)}
//             value={roomId}
//             onKeyUp={handleInputEnter}
//           />
//           <input
//             type="text"
//             className="inputBox"
//             placeholder="USERNAME"
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//             onKeyUp={handleInputEnter}
//           />
//           <button className="btn joinBtn" onClick={joinRoom}>
//             Join
//           </button>
//           <span className="createInfo">
//             If you don't have an invite then create &nbsp;
//             <a onClick={createNewRoom} href=" " className="createNewBtn">
//               new room
//             </a>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // hooks: roomId and username
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  // called when new room is clicked
  const createNewRoom = (e) => {
    // prevents refresh
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId) {
      toast.error(
        "ROOM ID is required click on new room to create one below join button"
      );
      return;
    } else if (!username) {
      toast.error("Username is required");
      return;
    }
    var rLen = roomId.length;
    var nameLen = username.length;
    if (rLen < 4) {
      toast.error("Room Id must be of minimum 4 characters");
      return;
    }

    if (nameLen < 3) {
      toast.error("Username must be of minimum 4 characters");
      return;
    }

    // Redirect using usenavigate hook
    // syntex: url,{states};

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  // convenience
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/nsec-csbs.png"
          alt="nsec-csbs-logo"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
