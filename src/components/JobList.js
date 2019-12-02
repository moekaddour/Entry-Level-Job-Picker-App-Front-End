import React from "react";
import SingleJob from "./SingleJob";
import { Typography } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useTheme } from "@material-ui/core/styles";
import JobModal from "./JobModal";

function JobList({ jobs }) {
  /////////////// Modal /////////////
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /////// Pagination /////////////
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  let jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);
  return (
    <div>
      <Typography variant="h4">Entry Level Software Jobs</Typography>
      <Typography variant="h6">Found {numJobs} Jobs</Typography>
      <JobModal handleClose={handleClose} open={open} job={selectedJob}/>
      <div className="job-list">
        {jobsOnPage.map((job, index) => {
          return (
            <SingleJob
              key={index}
              job={job}
              onClick={() => {
                setSelectedJob(job);
                handleClickOpen();
              }}
            />
          );
        })}
      </div>
      <Typography variant="h6">
        Page {activeStep} of {numPages - 1}
      </Typography>
      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === numPages - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default JobList;
