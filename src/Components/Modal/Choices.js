import React from 'react';
import { AddWrap, AddLabel, AddInput } from '../../functions/secondaryFunction';

export const Choices = ({ openItem, choice, changeChoices }) => {
    return (
        /*jshint ignore: start */
        <>
            <h3>Выберите:</h3>
            <AddWrap>
                {openItem.choices.map((item, i) => (
                    <AddLabel key={i}>
                        <AddInput 
                        type="radio" 
                        name="choices"
                        checked={item === choice} 
                        value={item}
                        onChange={changeChoices}
                        />
                        {item}
                    </AddLabel>
                ))}
                
            
        </AddWrap>
        </>
        /*jshint ignore: end */
    );
};