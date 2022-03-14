import { useState } from 'react';

const getTopping = (toppings) => toppings.map(topping => ({
    name: topping,
    checked: false
}));

export const useToppings = (openItem) => {
    const readyToppings = openItem.toppings ? getTopping(openItem.toppings) : [];
    const [toppings, setToppings] = useState(readyToppings);

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            const newItem = {...item};
            if (index === i){
                newItem.checked = !newItem.checked;
            }        
            return newItem;
            }));
    };     

   return { toppings, checkToppings };
};