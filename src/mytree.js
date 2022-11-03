import React, { Component } from "react";
import FamilyTree from "@balkangraph/familytree.js";
import "./Targaryen.css";

FamilyTree.templates.tommy_male.field_1 =
  '<text style="font-size: 12px;" fill="#ffffff" x="10" y="110">{val}</text>';
FamilyTree.templates.tommy_female.field_1 =
  '<text style="font-size: 12px;" fill="#ffffff" x="10" y="110">{val}</text>';
FamilyTree.templates.tommy_male.field_2 =
  '<text style="font-size: 16px;" fill="#ffffff" x="11.8" y="71">{val}</text>';
FamilyTree.templates.tommy_female.field_2 =
  '<text style="font-size: 16px;" fill="#ffffff" x="11.8" y="71">{val}</text>';
FamilyTree.templates.tommy_male.img_1 =
  '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="10" y="10" width="40" height="50"></image>';
FamilyTree.templates.tommy_female.img_1 =
  '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="10" y="10" width="40" height="50"></image>';

FamilyTree.CLINK_CURVE = 0;
FamilyTree.clinkTemplates.myTemplate = {
  defs: '<marker id="" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#ccc" /></marker>',
  link: '<path stroke-dasharray="" stroke="#aa9aaa" stroke-width="3" fill="none" d="{d}" />',
  label:
    '<text fill="#800080"  text-anchor="middle" x="{x}" y="{y}">{val}</text>',
};

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.family = new FamilyTree(this.divRef.current, {
      nodes: this.props.nodes,

      // layout: FamilyTree.layout.mixed,
      // siblingSeparation: 120,
      scaleInitial: FamilyTree.match.boundary,
      mode: "dark",
      nodeBinding: {
        field_0: "name",
        field_1: "Aliases",
        field_2: "throne",
        img_0: "img",
        img_1: "sigil",
      },
      clinks: [
        { from: 13, to: 14, template: "myTemplate" },
        { from: 18, to: 19, template: "myTemplate" },
        { from: 27, to: 35, template: "myTemplate" },
      ],
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
