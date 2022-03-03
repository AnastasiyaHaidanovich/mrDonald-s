import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPrice } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background-color: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin-bottom: 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
    margin-right: 34px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders }) => {

    const total = orders.reduce((result, order) => 
        totalPrice(order) + result, 0);

    return (
        /*jshint ignore: start */
        <>
            <OrderStyled>
                <OrderTitle>Ваш заказ</OrderTitle>
                <OrderContent>
                    {orders.length ?
                    <OrderList>
                        {orders.map(order => <OrderListItem order={order} />)}
                    </OrderList> : 
                    <EmptyList>Список заказов пуст</EmptyList>}
                </OrderContent>
                <Total>
                    <span>Итого: </span>
                    <span>0</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <Button>Оформить</Button>
            </OrderStyled>
        </>
        /*jshint ignore: end */
    );
};