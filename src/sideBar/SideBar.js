import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SideBarItem from "../sideBarItem/SideBarItem";

const SideBar = () => {
  return (
    <div>
      <h3>Hello from sidebar.</h3>
    </div>
  );
};

export default withStyles(styles)(SideBar);
