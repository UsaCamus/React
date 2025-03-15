import { useState } from "react";
import "./LedgerItem.css"

function LedgerItem(props){
    
    const [isEdit, setIsEdit] = useState(false);
    const [curType, setCurType] = useState("");
    const [curCategory, setCurCategory] = useState("");
    const [curAmount, setCurAmount] = useState("");
    const [curPayment, setCurPayment] = useState("");

    const type = (props.type === 1) ? "รายรับ" : "รายจ่าย";
    const category = props.category;
    const amount = props.amount;
    const payment = (props.payment === 1) ? "เงินสด" : ( props.payment === 2 ? "บัตรเดดิต" : "บัตรเครดิต");

    const onClickEdit = () => {
        setIsEdit(true);
        setCurType(props.type);
        setCurCategory(props.category);
        setCurAmount(props.amount);
        setCurPayment(props.payment);
    }

    const onClickDone = () => {
        const editList = {
            id: props.id,
            type: Number(curType),
            category: curCategory,
            amount: curAmount,
            payment: Number(curPayment),
        }
        props.editHandler(props.id, editList)
        setIsEdit(false);
    }

    if(isEdit){
        return (
            <tr>
                <td>
                    <select className="edit-select" value={curType} onChange={(e) => setCurType(e.target.value)}>
                        <option value='1'>รายรับ</option>
                        <option value='2'>รายจ่าย</option>
                    </select>
                </td>
                <td><input type="text" className="edit-input" value={curCategory} onChange={(e) => setCurCategory(e.target.value)}/></td>
                <td><input type="number" min="0" step="1" className="edit-input" value={curAmount} onChange={(e) => setCurAmount(e.target.value)}/></td>
                <td>
                    <select className="edit-select" value={curPayment} onChange={(e) => setCurPayment(e.target.value)}>
                        <option value='1'>เงินสด Cash</option>
                        <option value='2'>บัตรเดดิต Debit</option>
                        <option value='3'>บัตรเครดิต Cradit</option>
                    </select>
                </td>
                <td>
                    <button className="btn btn-success" onClick={onClickDone}>Done</button>
                    <button className="btn btn-default" onClick={() => setIsEdit(false)}>Cancel</button>
                </td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{type}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{payment}</td>
            <td>
                <button className="btn btn-warning" onClick={onClickEdit}>Edit</button>
                <button className="btn btn-danger" onClick={() => props.deleteHandler(props.id)}>Delete</button>
            </td>
        </tr>
        
    )
}

export default LedgerItem