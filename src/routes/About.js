import React from "react";

function About({ location, history }) {
  console.log(location);
  if (location.state === undefined) {
    history.push("/");
  }
  return <div>i am About</div>;
}

export default About;
