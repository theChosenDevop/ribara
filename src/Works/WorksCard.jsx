import React from "react";

const WorksCard = ({ icon, title, content }) => {
  return (
    <div className="workscard">
      <h4>
        <span>{icon}</span>
        {title}
      </h4>
      <p>{content}</p>
    </div>
  );
};

export default WorksCard;
