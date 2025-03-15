import { useState } from "react"
import "./NewLedger.css"

function NewLedger(props) {

    const [curType, setCurType] = useState(1);
    const [curCategory, setCurCategory] = useState("");
    const [curAmount, setCurAmount] = useState("");
    const [curPayment, setCurPayment] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
        const newLedger = {
            type: Number(curType),
            category: curCategory,
            amount: curAmount,
            payment: Number(curPayment),
        }

        props.onAddLedger(newLedger);
        props.setIsShow(false);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="NewLedgerContainer">
                <div className="LedgerInput">
                    <label className="labelLedger">ประเภท</label>
                    <select value={curType} onChange={(e) => setCurType(e.target.value)}>
                        <option value='1'>รายรับ</option>
                        <option value='2'>รายจ่าย</option>
                    </select>
                </div>
                <div className="LedgerInput">
                    <label className="labelLedger">หมวดหมู่</label>
                    <input type="text" value={curCategory} onChange={(e) => setCurCategory(e.target.value)} required/>
                </div>
                <div className="LedgerInput">
                    <label className="labelLedger">จำนวนเงิน</label>
                    <input type="number" min="0" step="1"  value={curAmount} onChange={(e) => setCurAmount(e.target.value)} required/>
                </div>
                <div className="LedgerInput">
                    <label className="labelLedger">ช่องทางการจ่ายเงิน</label>
                    <select value={curPayment} onChange={(e) => setCurPayment(e.target.value)}>
                        <option value='1'>เงินสด Cash</option>
                        <option value='2'>บัตรเดดิต Debit</option>
                        <option value='3'>บัตรเครดิต Cradit</option>
                    </select>
                </div>
                <hr />
                <div className="SubmitButton">
                    <button type="submit" >Save</button>
                </div>
                <div>
                    <button type="button" className="btn btn-back" onClick={() => props.setIsShow(false)}>Back</button>
                </div>
            </div>
        </form>
    )
}

export default NewLedger