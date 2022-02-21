import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

export function Menu({ setOpenItem }) {
    return (
    /*jshint ignore: start */
        <MenuStyled>
            <Banner />
            <section>
                <h2>Бургеры</h2>
                <ListItem 
                itemList={dbMenu.burger} 
                setOpenItem={setOpenItem}
                />
            </section>
            <section>
                <h2>Закуски / Напитки</h2>
                <ListItem 
                    itemList={dbMenu.other} 
                    setOpenItem={setOpenItem}
                    />
            </section>
        </MenuStyled>
        /*jshint ignore: end */
    );
}
    