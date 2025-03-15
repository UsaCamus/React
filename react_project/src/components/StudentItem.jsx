import React from "react";
import "./StudentItem.css";
import StudentTag from "./StudentTag";

/* arrow function */
// StudentItem () => {

function StudentItem(props) {
    const firstname = props.name
    const lastname = props.surname
    const age = props.age    
    /*
    const isFlag = true;
    const message = "Hello";
    const arr = [1, 2, 3];
    const message2 = "Bye Bye";

    let isShow = true;
    let welcomeMessage = "welcome to React";
    let arr2 = ["Hello","world"];
    */
    
    return (
        <div className="StudentItem">
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{age}</div>
                <StudentTag age={age}></StudentTag>
            <div>Function Component</div>

            {/* 
            <div>{isFlag ? message : message2}</div>
            <div>{isShow && welcomeMessage}</div>
            <div>{arr2.length > 0 && arr2}</div>            
            <div>{arr}</div> 
            */}            
        </div>
    )
}

export default StudentItem;