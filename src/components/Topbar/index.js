import React from "react";
import userLogo from "../../assests/users.png";

function Topbar() {
  return (
    <div className="topbar">
      <h5>
        Hallo, <span className="username">Shipper User</span>
      </h5>
      <img src={userLogo} alt="user-logo" />
    </div>
  );
}

export default Topbar;
