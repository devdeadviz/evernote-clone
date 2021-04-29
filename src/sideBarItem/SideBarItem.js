import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../hooks/helpers";

const SideBarItem = () => {
  return (
    <div>
      <h1>Hello from side bar item.</h1>
    </div>
  );
};

export default withStyles(styles)(SideBarItem);
