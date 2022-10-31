import React from 'react';
import FamilyTree from './mytree';
import "./Targaryen.css"
import useFetch from './useFetch';

export default function Targaryen() {

      
    return (
        <div style={{height: '100%'}}>

            <FamilyTree nodes={[
                { id: 1, pids: [2, 3], name: 'Aegon Targaryen I', gender: 'male', ancestralblades: "Blackfyre", img: 'https://cdn.balkan.app/shared/2.jpg'  },
                { id: 3, pids: [1], name: 'Visenya Targaryen', gender: 'female', img: 'https://cdn.balkan.app/shared/m30/5.jpg' },
                { id: 2, pids: [1], name: 'Rhaenys Targaryen', gender: 'female', img: 'https://cdn.balkan.app/shared/m10/2.jpg' },
                { id: 4, mid: 1, fid: 2, name: 'Aenys Targaryen', gender: 'male', img: 'https://cdn.balkan.app/shared/m10/1.jpg'  },
                { id: 5, mid: 1, fid: 3, name: 'Maegor Targaryen', gender: 'male', img: 'https://cdn.balkan.app/shared/w10/3.jpg' }
            ]} />
        </div>
    );
}


