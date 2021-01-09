import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ListIcon from "@material-ui/icons/List";
import logo from "../../assets/nzpmc-logo.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function NavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onHandleChange(newValue);
  };

  return (
    <Paper square className={classes.root} style={{ maxWidth: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<ListIcon />} aria-label="Questions" />
        <Tab
          icon={
            <img
              alt="NZPMC logo"
              style={{ margin: "10px", width: 32, height: 32 }}
              src={logo}
            />
          }
          aria-label="Current Question"
        />
        <Tab icon={<PersonPinIcon />} aria-label="Person" />
      </Tabs>
    </Paper>
  );
}
