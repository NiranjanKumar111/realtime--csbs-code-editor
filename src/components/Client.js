// import React from "react";
// import Avatar from "react-avatar";

// const Client = ({ username }) => {
//   return (
//     <div className="client">
//       <Avatar name={username} size={50} round="14px" />
//       <span className="userName">{username}</span>
//     </div>
//   );
// };

// export default Client;
import React from "react";
import Avatar from "react-avatar";

const Client = ({ username }) => {
  return (
    <div className="client">
      {/* Avatar from react library */}
      <Avatar name={username} size={50} round="14px" />
      <span className="userName">{username}</span>
    </div>
  );
};

export default Client;
