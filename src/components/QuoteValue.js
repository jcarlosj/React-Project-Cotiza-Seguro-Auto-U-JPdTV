import React from 'react';
import styled from '@emotion/styled';

/** Style Component */
const MessageComponent = styled .p `
    background-color: rgb( 127, 224, 237 );
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const TotalPriceComponent = styled .div `
    background-color: #FF1948;
    color: #FFFFFF;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ValueComponent = styled .p `
    font-size: 3rem;
    margin: 0;
`;

/** Component */
const QuoteValue = ({ quotation }) => {         // Destructuracion de props
    return( 
        ( quotation === 0 )
            ?   <MessageComponent>Elige marca, año y plan asegurador</MessageComponent> 
            :   <TotalPriceComponent>
                    <h3>Valor de la cotización</h3> 
                    <ValueComponent>$ { quotation } </ValueComponent>
                </TotalPriceComponent>
    );
}

export default QuoteValue;