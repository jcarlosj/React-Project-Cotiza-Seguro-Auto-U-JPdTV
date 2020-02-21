import React from 'react';

const QuoteValue = ({ quotation }) => {         // Destructuracion de props
    return( 
        ( quotation === 0 )
            ?   <p>Elige marca, año y plan asegurador</p> 
            :   quotation
    );
}

export default QuoteValue;