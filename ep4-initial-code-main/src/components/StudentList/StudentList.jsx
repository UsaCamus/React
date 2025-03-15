import { useState } from "react";
import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;
  const [curType, setCurType] = useState("A");
  const filterStd = studentList.filter(j => j.bType === curType)

  let contentList = <div>Not Found</div>;

  if(filterStd.length > 0 ){
    contentList = filterStd.map(e => <StudentItem
      key={e.id}
      name={e.name}
      surname={e.surname}
      age={e.age}
      bType={e.bType}
      id={e.id}
      editHandler={props.editHandler}
      deleteHandler={props.deleteHandler}
    />)
  }

  return (
    <>
      <div className="selectdiv">
        <label>
          <select value={curType} onChange={(e) => setCurType(e.target.value)}>
            <option value="A" >A</option>
            <option value="B" >B</option>
            <option value="O" >O</option>
            <option value="AB" >AB</option>
          </select>
        </label>
      </div>
      <div>        
        {contentList} 
      </div>
    </>
  );
}

export default StudentList;
