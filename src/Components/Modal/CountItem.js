import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    text-align: center;
`;

const ButtonCount = styled.button`
    background-color: transparent;
    height: 100%;
    border: none;
    font-size: 20px;
    width: 30px;
`;

export const CountItem = ({ count, setCount, onChange }) => {

    return (
        /*jshint ignore: start */
        <CountWrapper>
        <span>Количество</span>
            <div>
                <ButtonCount disabled={count <=1} onClick={() => setCount(count-1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count+1)}>+</ButtonCount>
            </div>
        </CountWrapper>
        /*jshint ignore: end */
    );
};