import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPrice } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { Choices } from './Choices';
import { useChoices } from '../Hooks/useChoices';

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 500px;
    max-height: 70%;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const Banner = styled.div`
    height: 200px;
    background-image: url(${({img})=> img});
    background-size: cover;
    background-position: center;
`;

const ModalContent = styled.div`
    padding: 20px 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const toppings = useToppings(openItem);
    const choices = useChoices();
    const counter = useCount(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if (e.target.id === "overlay"){
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    return (
        /*jshint ignore: start */
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <ModalContent>
                        <HeaderContent>
                            <h3>{openItem.name}</h3>
                            <h3>{formatCurrency(openItem.price)}</h3>
                        </HeaderContent>
                        <CountItem {...counter}/>
                        {openItem.toppings && <Toppings {...toppings} />}
                        {openItem.choices && <Choices {...choices} openItem={openItem} />}
                        <TotalPriceItem>
                            <span>Итого:</span>
                            <span>{formatCurrency(totalPrice(order))}</span>
                        </TotalPriceItem>
                    <Button 
                    onClick={isEdit ? editOrder : addToOrder} 
                    disabled={order.choices && !order.choice}>{isEdit ? "Редактировать" : "Добавить"}</Button>
                </ModalContent>
            </Modal>
        </Overlay>
        /*jshint ignore: end */
    );    
};