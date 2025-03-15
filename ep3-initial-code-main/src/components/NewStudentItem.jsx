import { useState } from "react"
import "./NewStudentItem.css"

const NewStudentItem = () => {

    const [currentName , setCurrentName] = useState("");
    const [currentSurname, setCurrentSurname] = useState("");
    const [currentAge, setCurrentAge] = useState("");

    const nameChangeHandler = (event) => {
        setCurrentName(event.target.value);
    }
    
    const surnameChangeHandler = (event) => {
        setCurrentSurname(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setCurrentAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newStudent = {
            name: currentName,
            surname: currentSurname,
            age: Number(currentAge),
        }
        
        props.onAddStudent(newStudent)

        setCurrentName("")
        setCurrentSurname("")
        setCurrentAge("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="NewStudentContainer">
                <div className="StudentInput">
                    <label htmlFor="">First Name</label>
                    <input type="text" onChange={nameChangeHandler} value={currentName}/>
                </div>
                <div className="StudentInput">
                    <label htmlFor="">Surname</label>
                    <input type="text" onChange={surnameChangeHandler} value={currentSurname}/>
                </div>
                <div className="StudentInput">
                    <label htmlFor="">Age</label>
                    <input type="number" min="0" max="100" step="1" onChange={ageChangeHandler} value={currentAge}/>
                </div>
            </div>
            <div className="SubmitButton">
                <button type="submit">Add Student</button>
            </div>
        </form>
    )
}
export default NewStudentItem