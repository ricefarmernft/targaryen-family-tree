import React from "react";
import FamilyTree from "./mytree";
import "./Targaryen.css";
import { data } from "./data";
import Header from "./header";

export default function Targaryen() {
  return (
    <>
      <Header />
      <div style={{ height: "100%" }}>
        <FamilyTree nodes={data} />
      </div>
    </>
  );
}
