import ItemRoot from "./ItemRoot"

function ItemCard(props){
    if(props.isSwap){
        return(
            <div>
                <h4>
                    <ItemRoot nameItem={props.name} priceItem={props.price}/>
                </h4>
            </div>
        )
    }
    return(
        <div>
            <h4>
                <ItemRoot nameItem={props.price} priceItem={props.name}/>
            </h4>
        </div>
    )
}
export default ItemCard