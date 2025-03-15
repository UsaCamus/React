import React from "react";

function StudentExample (props) {
    return (
        <div>
            StudentExample = 
            {React.Children.map(props.children , (child) => 
                React.cloneElement(child , { style : {color: "green" , fontSize: "20px" }} )
            )}
        </div>
    )
}

export default StudentExample;