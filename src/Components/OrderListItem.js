import React from 'react';
import styled from 'styled-components';
import trashImg from '../image/rubbish.svg';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
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

export const OrderListItem = () => (
    /*jshint ignore: start */
    <OrderItemStyled>
        <ItemName>JS burger</ItemName>
        <span>2</span>
        <ItemPrice>750 p.</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
    /*jshint ignore: end */
);