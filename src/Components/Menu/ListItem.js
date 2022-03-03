import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../../functions/secondaryFunction';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({ img }) => `url(${img})`};
    font-size: 30px;
    background-position: center;
    background-size: cover;
    margin: 30px 15px;
    padding: 15px;
    color: white;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        opacity: 50%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 20px 0 rgba(255, 255, 255, 1)
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    /*jshint ignore: start */
    <List>
        {itemList.map(item => (
            <Item 
                key={item.id}
                img={item.img} 
                onClick={() => setOpenItem(item)}>
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
            </Item>
        ))}
    </List>
    /*jshint ignore: end */
);