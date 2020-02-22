import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
/** Components */
import Header from './components/Header';
import QuotationForm from './components/QuotationForm';
import QuoteDetail from './components/QuoteDetail';
import QuoteValue from './components/QuoteValue';
import Spinner from './components/Spinner';

/** Style Component div */
const ContentComponent = styled .div `
    margin: 0 auto;
    max-width: 600px;
    padding: 3rem 0;
`;

const FormComponent = styled .div `
    background-color: #d4e9ee;
    padding: 1.2rem 2rem;
`;

function App() {

    /** Define State  */
    const 
        [ showSpinner , setShowSpinner ] = useState( false ),
        [ quoteValue, setQuoteValue ] = useState({
            quotation: 0,
            data: {
                brand: '',
                year: '',
                plan: ''
            }
        });

    const { quotation, data } = quoteValue;     // Extrae datos    
    console .log( 'quotation', quotation );
    
    return (
        <ContentComponent>
            <Header 
                title="Cotizador de Seguros para Automóvil"
            />
        
            <FormComponent>
                <QuotationForm
                    saveQuote={ setQuoteValue }
                    loadSpinner={ setShowSpinner }
                />
                { showSpinner
                    ?   <Spinner />
                    :   null
                }
                { ! showSpinner
                    ?   <Fragment>
                            <QuoteDetail 
                                details={ data }
                            />
                            <QuoteValue
                                quotation={ quotation }
                            />
                        </Fragment>
                    :   null
                }
            </FormComponent>
        </ContentComponent>
    );
}

export default App;
