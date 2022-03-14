import styled from 'styled-components';

export const AddWrap = styled.div`
    margin-bottom: 10px;
    column-count: 2;
    max-width: 500px;
    column-gap: 20px;
    margin: 0 auto;
`;

export const AddLabel = styled.label`
    cursor:pointer;
    display: block;
`;

export const AddInput = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export const totalPrice = order => {
    const countToppings = order.topping && order.topping.filter(item => item.checked).length;
    const priceToppings = order.price * 0.1 * countToppings;
    return (order.price + priceToppings) * order.count;
};

export const formatCurrency = value => value.toLocaleString('ru-RU', 
{ style:'currency', currency: 'RUB'});