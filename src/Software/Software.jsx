import "./Software.css";
import React from "react";
import SoftwareCard from "./SoftwareCard";

const Software = () => {
  return (
    <div className="software">
      <h1 className="software-header">
        All-In-One <span>Software</span>
      </h1>
      <p className='software-paragraph'>
        Connect, stay up to date with required industry skill sets,keep the gaps{" "}
        <br />
        closed!
      </p>
           <SoftwareCard /> 
    </div>
  );
};
export default Software;

