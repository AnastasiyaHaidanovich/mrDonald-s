import React from 'react';
import { AddWrap, AddLabel, AddInput } from '../../functions/secondaryFunction';

export const Toppings = ({ toppings, checkToppings }) => {
    return (
        /*jshint ignore: start */
        <>
            <h3>Добавки</h3>
            <AddWrap>
                {toppings.map((item, i) => (
                    <AddLabel key={i}>
                        <AddInput 
                        type="checkbox" 
                        checked={item.checked} 
                        onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </AddLabel>
                ))}
                
            
        </AddWrap>
        </>
        /*jshint ignore: end */
    );
};