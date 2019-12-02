import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
function SingleJob({ job , onClick}) {
  return (
    <div className="single-job" onClick={onClick}>
      <div className="sj-title"> {job.title}</div>
      <div className="sj-company">{job.company}</div>
      <div className="sj-location"><LocationOnIcon/>{job.location}</div>
      <div className="sj-createdAt">
        {job.created_at
          .split(" ")
          .slice(0, 3)
          .join("-")}
      </div>
    </div>
  );
}

export default SingleJob;
