import React from "react";
import ProptTypes from 'prop-types';


export default function Navbar(props){
    return(
        <div>
            <ul>
                <li>{props.home}</li>
                <li>{props.about}</li>
                <li>{props.contact}</li>
            </ul>
        </div>
    )
}
Navbar.ProptTypes={
    home:ProptTypes.string.isRequired,
    about:ProptTypes.string.isRequired,
    contact:ProptTypes.string.isRequired
}
// Navbar.defaultProps={
//     home:"set home",
//     about:"set about",
//     contact:"set contact"
// }