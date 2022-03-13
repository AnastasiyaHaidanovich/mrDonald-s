import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    margin-bottom: 10px;
    column-count: 2;
    max-width: 500px;
    column-gap: 20px;
    margin: 0 auto;
`;

const ToppingLabel = styled.label`
    cursor:pointer;
    display: block;
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export const Toppings = ({ toppings, checkToppings }) => {
    return (
        /*jshint ignore: start */
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox 
                        type="checkbox" 
                        checked={item.checked} 
                        onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </ToppingLabel>
                ))}
                
            
        </ToppingWrap>
        </>
        /*jshint ignore: end */
    );
};