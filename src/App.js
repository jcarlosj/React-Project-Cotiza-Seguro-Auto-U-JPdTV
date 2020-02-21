import React, { useState } from 'react';
import styled from '@emotion/styled';
/** Components */
import Header from './components/Header';
import QuotationForm from './components/QuotationForm';
import QuoteDetail from './components/QuoteDetail';

/** Style Component div */
const ContentComponent = styled .div `
    margin: 0 auto;
    max-width: 600px;
`;

const FormComponent = styled .div `
    background-color: #d4e9ee;
    padding: 1.2rem 2rem;
`;

function App() {

    /** Define State  */
    const [ quoteValue, setQuoteValue ] = useState({
        quota: '',
        data: {
            brand: '',
            year: '',
            plan: ''
        }
    });

    const { data } = quoteValue;

    return (
        <ContentComponent>
            <Header 
                title="Cotizador de Seguros para Automóvil"
            />
        
            <FormComponent>
                <QuotationForm
                    saveQuote={ setQuoteValue }
                />
                <QuoteDetail 
                    details={ data }
                />
            </FormComponent>
        </ContentComponent>
    );
}

export default App;
