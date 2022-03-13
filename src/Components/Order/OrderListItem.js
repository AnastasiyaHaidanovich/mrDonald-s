import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/rubbish.svg';
import { totalPrice } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
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

const ToppingsWrapper = styled.div`
    flex-basis: 100%;
`;
const ToppingsOrdered = styled.span`
    font-size: 0.5em;
    margin-right: 5px;
`;

export const OrderListItem = ({ order }) => (
    /*jshint ignore: start */
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPrice(order))}</ItemPrice>
        <TrashButton/>

        <ToppingsWrapper>
            {order.topping.filter(item => item.checked).map(item => (
                <ToppingsOrdered>
                    {item.name}
                </ToppingsOrdered>      
            ))}
        </ToppingsWrapper>          
    </OrderItemStyled>
    /*jshint ignore: end */
);