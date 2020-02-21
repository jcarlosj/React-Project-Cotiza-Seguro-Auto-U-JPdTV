import React from 'react';
import styled from '@emotion/styled';
/** Components */
import Header from './components/Header';
import QuotationForm from './components/QuotationForm';

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
    return (
        <ContentComponent>
            <Header 
                title="Cotizador de Seguros para Automóvil"
            />
        
            <FormComponent>
                <QuotationForm />
            </FormComponent>
        </ContentComponent>
    );
}

export default App;
