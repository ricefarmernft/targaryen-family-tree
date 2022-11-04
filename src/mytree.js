import React, { Component } from "react";
import FamilyTree from "@balkangraph/familytree.js";
import "./Targaryen.css";

const dragonIcon = `<svg width="50" height="240" viewBox="0 0 1000 2000" class="dragon-icon"><path d="M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z"/></svg>`;

FamilyTree.templates.tommy_male.dragon =
  '<g transform="translate(210,15)";><rect width="30" height="30" fill="#ffffff" opacity=0></rect>' +
  dragonIcon +
  "</a></g>";
FamilyTree.templates.tommy_female.dragon =
  '<g transform="translate(210,15)";><rect width="30" height="30" fill="#ffffff" opacity=0></rect>' +
  dragonIcon +
  "</a></g>";

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

FamilyTree.miniMap.height = 100;
FamilyTree.miniMap.width = 200;
FamilyTree.miniMap.selectorBackgroundColor = "#c8c5c1";
FamilyTree.miniMap.padding = 5;
FamilyTree.miniMap.position = {
  top: "20",
  left: "20",
  right: undefined,
  bottom: undefined,
};

FamilyTree.CLINK_CURVE = -0.1;
FamilyTree.clinkTemplates.myTemplate = {
  defs: '<marker id="" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#ccc" /></marker>',
  link: '<path stroke-dasharray="" stroke="#918c8c" stroke-width="2" fill="none" d="{d}" />',
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

      scaleInitial: FamilyTree.match.height,
      miniMap: true,
      subtreeSeparation: 20,
      mode: "dark",
      nodeBinding: {
        field_0: "name",
        field_1: "Aliases",
        field_2: "throne",
        img_0: "img",
        img_1: "sigil",
        dragon: "dragon",
      },
      clinks: [
        { from: 4, to: 14, template: "myTemplate" },
        { from: 13, to: 14, template: "myTemplate" },
        { from: 18, to: 19, template: "myTemplate" },
        { from: 27, to: 35, template: "myTemplate" },
        { from: 60, to: 40, template: "myTemplate" },
        { from: 43, to: 52, template: "myTemplate" },
        { from: 52, to: 53, template: "myTemplate" },
        { from: 50, to: 54, template: "myTemplate" },
        { from: 66, to: 71, template: "myTemplate" },
      ],
      editForm: {
        titleBinding: "name",
        photoBinding: "img",
        generateElementsFromFields: false,
        addMore: "Add more elements",
        addMoreBtn: "Add element",
        addMoreFieldName: "Element name",
        elements: [
          { type: "textbox", label: "", binding: "throne" },
          [
            { type: "textbox", label: "Name", binding: "name" },
            { type: "textbox", label: "Dragon", binding: "dragon" },
          ],
          [{ type: "textbox", label: "Alias", binding: "Aliases" }],
          [
            { type: "textbox", label: "Birth Date", binding: "Born" },
            { type: "textbox", label: "Death Date", binding: "Died" },
          ],
          [{ type: "textbox", label: "Culture", binding: "culture" }],
        ],
        buttons: {
          edit: null,
          share: null,
          pdf: {
            icon: FamilyTree.icon.pdf(24, 24, "#fff"),
            text: "Save as PDF",
          },
          remove: null,
        },
      },
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
