import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/rubbish.svg';
import { totalPrice } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ToppingsOrdered = styled.div`
    font-size: 0.6em;
    margin-right: 5px;
    color: #9a9a9a;
    margin-top: 5px;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => (
    /*jshint ignore: start */
    <OrderItemStyled onClick={() => setOpenItem({...order, index})}>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPrice(order))}</ItemPrice>
        <TrashButton onClick={(e) => {
            e.stopPropagation();
            deleteItem(index)}
        }/>
        <ToppingsOrdered>
            {order.topping.filter(item => item.checked)
            .map(item => item.name)
            .join(", ")}
        </ToppingsOrdered>      
    </OrderItemStyled>
    /*jshint ignore: end */
);