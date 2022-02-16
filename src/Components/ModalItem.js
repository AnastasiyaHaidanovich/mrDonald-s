import React from 'react';
import styled from 'styled-components';

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
    position: relative3
`;

const Banner = styled.div`
    height: 200px;
    background-image: url(${({img})=> img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const ModalText = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: top;
    justify-content: space-between;
`;

const AddButton = styled.button`
    position: absolute;
    font-size: 21px;
    color: #fff;
    background-color: rgba(41, 155, 1, 1);
    padding: 20px 75px;
    border: none;
    bottom: 50px;
    left: calc(50% - 121px);
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === "overlay"){
            setOpenItem(null);
        }
    }

    if(!openItem) return null;
    return (
        /*jshint ignore: start */
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <ModalText>
                    <h3>{openItem.name}</h3>
                    <h3>{openItem.price.toLocaleString('ru-RU',
                    {style: 'currency', currency: 'RUB'})}</h3>
                </ModalText>
                <AddButton>Добавить</AddButton>
            </Modal>
        </Overlay>
        /*jshint ignore: end */
    );    
};