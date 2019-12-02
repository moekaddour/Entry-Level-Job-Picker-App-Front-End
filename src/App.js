import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";
import "./App.css";

async function fetchJobs(setJobs) {
  const res = await fetch("http://localhost:5000/jobs");
  const data = await res.json();
  setJobs(data);
}
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs(setJobs);
  }, []);
  return (
    <div className="App">
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
