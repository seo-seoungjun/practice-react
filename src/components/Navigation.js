import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{ position: "absolute", top: "500px" }}>
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            navigatortry: true,
          },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
