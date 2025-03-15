import { useState } from "react";
import LedgerItem from "../LedgerItem/LedgerItem"
import "./LedgerList.css"

function LedgerList(props){
    
    const ledgerList = props.ledgerList;
    const [curType, setCurType] = useState(0);

    let filterType = ledgerList;
    if(curType > 0){
        filterType = ledgerList.filter(k => k.type === curType )
    }

    let contentList = <div>Not Found</div>;

    const filterTypeHandler = (e) => {
        const numericValue = parseInt(e.target.value, 10);
        setCurType(numericValue)
    }

    if(filterType.length > 0 ){
        contentList = filterType.map(e => <LedgerItem 
            key={e.id}
            id={e.id}
            type={e.type}
            category={e.category}
            amount={e.amount}
            payment={e.payment}
            editHandler={props.editHandler}
            deleteHandler={props.deleteHandler}
        />)
    }

    return (
        <>
            <div className="selectdiv">
                <label>
                <select value={curType} onChange={filterTypeHandler}>
                    <option value='0'>ทั้งหมด</option>
                    <option value='1'>รายรับ</option>
                    <option value='2'>รายจ่าย</option>
                </select>
                </label>
            </div>
            <div>
                <table width="100%">
                    <thead>
                        <tr>
                            <th width="10%">ประเภท</th>
                            <th width="20%">หมวดหมู่</th>
                            <th width="10%">จำนวนเงิน</th>
                            <th width="15%">ช่องทางการจ่ายเงิน</th>
                            <th width="10%">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentList}
                    </tbody>
                </table>                 
            </div>                 
        </>
    )
}

export default LedgerList