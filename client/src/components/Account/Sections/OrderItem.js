import styled from "styled-components";

const OrderItem = ({ orderInfo }) => {

    return (
        <>
    <OrderNum>Order #{orderInfo._id}</OrderNum>
    <ItemList>
        {orderInfo.orderInfo.map((item)=>{
            return (
            <ItemInfo>${item.itemTotal} - qnt: {item.qnt} - {item._id} - {item.name}</ItemInfo>
            )
        })}   
    </ItemList>
    <OrderTotal>${orderInfo.orderInfo.reduce((sum, amt) => sum = sum + amt["itemTotal"],0)} total</OrderTotal>
        </>
    )
}

const OrderNum = styled.div`
    font-size: 15px;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
`;

const ItemInfo = styled.p`
    margin: 4px 0;
    font-size: 12px;
`;

const OrderTotal = styled.p`
    font-size: 14px;
    font-weight: 600;
`;

export default OrderItem;