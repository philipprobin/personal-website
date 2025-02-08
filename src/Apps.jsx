import React from 'react';

import Flashlate from "./projects/Flashlate.jsx";
import SparMahl from "./projects/SparMahl.jsx";
import VaccineCheck from "./projects/VaccineCheck.jsx";


function Apps() {
    return (
        <div>

            <h1 className="text-3xl font-customBold text-left mb-8">My Projects</h1>


            <Flashlate />
            <SparMahl />
            <VaccineCheck />
        </div>
    );
}

export default Apps; 