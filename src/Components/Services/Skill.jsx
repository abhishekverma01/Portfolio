import React from "react";
import arrow_icon from "../../assets/arrow_icon.svg"

function Skill(props) {
    return (
        <div className="skillBox">
            <p className="s_no">{props.s_no}</p>
            <h3>{props.s_name}</h3>
            <p>{props.s_desc}</p>
            <div className="more">
                <p>Read More </p>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
    );
}

export default Skill;