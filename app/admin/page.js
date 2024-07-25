import React from "react";
import AdminPanelComp from "../components/AdminPanelComp";
import { getAllClasses } from "../lib/db";

async function page(props) {
  const classes = await getAllClasses();
  return <AdminPanelComp classes={classes} />;
}

export default page;
