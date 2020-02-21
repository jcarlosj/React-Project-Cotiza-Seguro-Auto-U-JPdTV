import React, { Fragment } from 'react';

const QuoteDetail = ({ details }) => {         // Destructuración del props
    const { brand, year, plan } = details;     // Extrae datos usando Destructuración

    /** Valida si las propiedades vienen con valores vacíos */
    if( brand === '' || year === '' || plan === '' ) {
        return null;
    }

    return(
        <Fragment>
            <h2>Detalles de la cotización</h2>
            <ul>
                <li>Marca: { brand }</li>
                <li>Año: { year }</li>
                <li>Plan: { plan }</li>
            </ul>
        </Fragment>
    );
}

export default QuoteDetail;