import React from "react";

import { Link } from "react-router-dom";

const LinkContent = (props) => {
    return <Link to={props.url}>{props.text}</Link>
}

export default function Dropdown(props) {
    return (
        <div className="dropdown">
            <div onClick={()=>props.toggle(props.heading)}>
                <h3 className='dropdown-heading'><Link to={props.headingUrl}>{props.heading}</Link></h3>
            </div>
            {props.isOpen ? <div className="dropdown-body">
                {props.links && props.links.map(link=>LinkContent(link))}
            </div> : null}
        </div>
    );
}
