import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

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
const TitleComponent = styled .h3 `
    text-transform: uppercase;
`;
const ValueComponent = styled .p `
    font-size: 3rem;
    margin: 0;
`;
const TotalComponent = styled .div ``;

/** Component */
const QuoteValue = ({ quotation }) => {         // Destructuracion de props
    return( 
        ( quotation === 0 )
            ?   <MessageComponent>Elige marca, año y plan asegurador</MessageComponent> 
            :   <TotalPriceComponent>
                    <TransitionGroup
                        component="span"
                        className="total"
                    >
                        <CSSTransition
                            classNames="total"
                            key={ quotation }
                            timeout={ { enter: 1000, exit: 1000 } }
                        >
                            <ValueComponent>$ Total <span>{ quotation }</span> </ValueComponent>
                        
                        </CSSTransition>
                    </TransitionGroup>
                </TotalPriceComponent>
    );
}

/** Verificación de Tipos */
QuoteValue .propTypes = {
    quotation: PropTypes .number .isRequired
}

export default QuoteValue;