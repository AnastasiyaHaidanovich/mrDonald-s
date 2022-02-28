import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ButtonCheckout';

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
    height: 400px;
    position: relative;
`;

const Banner = styled.div`
    height: 200px;
    background-image: url(${({img})=> img});
    background-size: cover;
    background-position: center;
`;

const ModalContent = styled.div`
    padding: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const closeModal = e => {
        if (e.target.id === "overlay"){
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
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
                            <h3>{openItem.price.toLocaleString('ru-RU',
                            {style: 'currency', currency: 'RUB'})}</h3>
                        </HeaderContent>
                    <Button onClick={addToOrder}>Добавить</Button>
                </ModalContent>
            </Modal>
        </Overlay>
        /*jshint ignore: end */
    );    
};