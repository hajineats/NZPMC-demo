import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const userDetail = {
  details: {
    name: "Hajin",
    email: "sonhajin99@gmail.com",
    school: "University of Auckland",
    year: "15"
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function UserDetailsAndInstructions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      className={classes.root}
      style={{ maxWidth: "100%", textAlign: "left" }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ margin: "20px", textAlign: "left" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Your Details</Typography>
          <Typography className={classes.secondaryHeading}>
            View your details (currently logged on as {userDetail.details.name})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: {userDetail.details.name} <br />
            Email: {userDetail.details.email} <br />
            School: {userDetail.details.school} <br />
            Year Level: {userDetail.details.year}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{ margin: "20px", textAlign: "left" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>
            Welcome to NZPMC competition! <br />
            You have 1 hour to complete everything. Good luck. <br />
            <br />
            Press Submit on the bottom right to submit the exam. <br />
            <br />
            <br />
            <hr />
            IMPORTANT: note that you won't be able to sit the competition when
            you exit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
