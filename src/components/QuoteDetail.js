import React from 'react';
import styled from '@emotion/styled';

/** Helpers */
import { capitalize } from '../helpers/convert.helper';

/** Style Component */
const QuoteDetailComponent = styled .div `
    background-color: #FFFFFF;
    color: #29303b;
    margin: .5rem 0;
    padding: 0 0 1rem 0;
    text-align: center;
`;
const TitleComponent = styled .h2 `
    background-color: #29303b;
    color: #FFFFFF;
    font-family: 'Slabo 27px', serif;
    font-size: 1.4rem;
    padding: 1rem;
`;
const ItemComponent = styled .li `
    font-size: 1.2rem;
    list-style: none;
    padding: .7rem;
`;
const SpanComponent = styled .span `
    font-weight: bold
`;

/** Component */
const QuoteDetail = ({ details }) => {         // Destructuración del props
    const { brand, year, plan } = details;     // Extrae datos usando Destructuración

    /** Valida si las propiedades vienen con valores vacíos */
    if( brand === '' || year === '' || plan === '' ) {
        return null;
    }

    return(
        <QuoteDetailComponent>
            <TitleComponent>Detalles de la cotización</TitleComponent>
            <ul>
                <ItemComponent>
                    <SpanComponent>Marca:</SpanComponent> { capitalize( brand ) }
                </ItemComponent>
                <ItemComponent>
                    <SpanComponent>Año:</SpanComponent> { year }
                </ItemComponent>
                <ItemComponent>
                    <SpanComponent>Plan:</SpanComponent> { capitalize( plan ) }
                </ItemComponent>
            </ul>
        </QuoteDetailComponent>
    );
}

export default QuoteDetail;