import React from 'react';
import styled from '@emotion/styled';

/** Style Component Header (Crea 'Componente' de estilo) indicando el nombre de la etiqueta a desplegar */
const ContentHeader = styled .header `
    background-color: #29303b;
    color: #FFFFFF;
    font-weight: bold;
    margin-top: 3rem;
    padding: 1rem 2rem;
`;
/** Style Component H1 */
const ContentH1 = styled .h1 `
    font-family: 'Slabo 27px', serif;
    font-size: 2rem;
    margin: 0;
    text-align: center;
`;

/** Header Component */
const Header = ({ title }) => {     // Destructuracion del props
    return (
        <ContentHeader>
            <ContentH1>{ title }</ContentH1>
        </ContentHeader>
    );
}

export default Header;