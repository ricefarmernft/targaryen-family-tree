import React from 'react';
import FamilyTree from './mytree';
import "./Targaryen.css"
import { data } from './data';

export default function Targaryen() {
    return (<>
        <div style={{height: '100%'}}>

            <FamilyTree nodes={data} />
        </div>
        
      </>);
}


