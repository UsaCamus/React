import React from "react";
import "./StudentItem.css";

class StudentItem extends React.Component {
    render() {
        let name = "Usa";
        let surname = "Sawadee";
        let age = 26;
        return(
            <div className="StudentItem">
                <div>{name}</div>
                <div>{surname}</div>
                <div>{age}</div>
                <div>Class Component</div>
            </div>
        )
    }
}

export default StudentItem;