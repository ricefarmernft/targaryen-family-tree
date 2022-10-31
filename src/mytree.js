import React, { Component } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

export default class Chart extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.family = new FamilyTree (this.divRef.current , {
            nodes: this.props.nodes,

            nodeBinding: {
                field_0: 'name',
                img_0: 'img'
            }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}