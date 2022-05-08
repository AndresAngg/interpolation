import React from "react";
import '../App.css'

const BoxForm = (props) => {
    return(
        <div className="boxForm">
            {props.children}
        </div>
    )
}
export default BoxForm