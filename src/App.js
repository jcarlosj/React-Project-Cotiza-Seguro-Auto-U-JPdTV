import React from 'react';
import styled from '@emotion/styled';
/** Components */
import Header from './components/Header';

/** Style Component div */
const ContentComponent = styled .div `
    margin: 0 auto;
    max-width: 600px;
`;

function App() {
    return (
        <ContentComponent>
            <Header 
                title="Cotizador de Seguros para Automóvil"
            />
        </ContentComponent>
    );
}

export default App;
