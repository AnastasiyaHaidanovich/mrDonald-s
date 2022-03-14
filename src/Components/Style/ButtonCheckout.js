import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    font-size: 21px;
    color: #fff;
    background-color: rgba(41, 155, 1, 1);
    padding: 20px 75px;
    border-color: transparent;
    bottom: 50px;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: 0.3s;
    &:hover {
        background-color: rgba(255, 255, 255, 1);
        color: rgba(41, 155, 1, 1);
        border-color: rgba(41, 155, 1, 1);
    }
    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;