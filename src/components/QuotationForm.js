import React, { useState } from 'react';
import styled from '@emotion/styled';
/** Helpers */
import { getDifferenceInYears, getCostPerBrand, getCostPerPlan } from '../helpers/calculations.helpers';

/** Style Components */
const FieldComponent = styled .div `
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
`;
const LabelComponent = styled .label `
    flex: 0 0 100px;
    font-size: 1.4rem;
    font-weight: bold;
`;
const LabelRadioComponent = styled .label `
    font-size: 1.4rem;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const SelectComponent = styled .select `
    background-color: #FFFFFF;
    border: 1px solid #F1F1F1;
    display: block;
    padding: 1rem;
    width: 100%;
    -webkit-apperance: none;
`;
const InputRadioComponent = styled .input `
    margin: 1rem;
    height: 18px;
    width: 18px;
`;
const ButtonComponent = styled .button `
    background-color: #FF1948;
    border: none;
    color: #FFFFFF;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 2rem 0 0 0;
    padding: 1rem;
    text-transform: uppercase;
    transition: background-color .3s ease;
    width: 100%;

    &:hover {
        background-color: #29303b;
        cursor: pointer;
    }
`;
const ErrorComponent = styled .p `
    background-color: #FF194833;
    color: #FF1948;
    font-size: 1.4rem;
    margin: 1rem 0;
    padding: 1rem;
`;

/** Component */
const QuotationForm = ({ saveQuote, loadSpinner }) => {      // Destructuración del props

    const // Define States
        [ error, setError ] = useState( false ),
        [ data, setData ] = useState({
            brand: '',
            year: '',
            plan: ''
        });

    /** Extraer valores usando Destructuracion */
    const { brand, year, plan } = data;

    /** Manejador de Cambios el State */
    const handleChange = ( event ) => {
        /** Actualiza State */
        setData({
            ...data,
            [event .target .name]: event .target .value         // Par clave valor de cada campo
        });
    }

    const handleSubmit = ( event ) => {
        event .preventDefault();

        /** Valida campos del formulario */
        if( brand .trim() === '' || year .trim() === '' || plan .trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        loadSpinner( true );
        setTimeout( () => {
            loadSpinner( false );

            /** Envia al State del componente padre */
            saveQuote({
                quotation: quote( year, brand, plan ),  // Calcula Cotización
                data
            });
        }, 3000 );
    
    } 

    /** Calcula Cotización */
    const quote = ( y, b, p ) => {
        let years = getDifferenceInYears( y ),
            baseCostValue = 2000;
        /** Calculo:
         *  Se realizarán teniendo encuenta las siguientes, características:
         *  1. Por cada año restar el 3%.
         *  2. Por marca incrementar: 30% (Europeo), 15% (Americano), 5% (Asiático)
         *  3. Por tipo de plan incrementar: 20% (Básico), 50% (Completo) 
         */
        baseCostValue -= baseCostValue * years * 0.03;          // (1)
        baseCostValue = baseCostValue * getCostPerBrand( b );   // (2)
        baseCostValue = baseCostValue * getCostPerPlan( p );    // (3)
        console .log( 'Total', baseCostValue );

        return baseCostValue .toFixed( 2 );   // Costo final con solo dos digitos de decimales
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            { error 
                ?   <ErrorComponent>Todos los campos son obligatorios</ErrorComponent>
                :   null
            }
            <FieldComponent>
                <LabelComponent>Marca *</LabelComponent>
                <SelectComponent
                    name="brand"
                    value={ brand }
                    onChange={ handleChange }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="american">Americano</option>
                    <option value="european">Europeo</option>
                    <option value="asiatic">Asiatico</option>
                </SelectComponent>
            </FieldComponent>
            <FieldComponent>
                <LabelComponent>Año *</LabelComponent>
                <SelectComponent
                    name="year"
                    value={ year }
                    onChange={ handleChange }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </SelectComponent>
            </FieldComponent>
            <FieldComponent>
                <LabelComponent>Plan *</LabelComponent>
                <LabelRadioComponent>
                    <InputRadioComponent 
                        type="radio"
                        name="plan"
                        value="basic" 
                        checked={ plan === 'basic' } 
                        onChange={ handleChange }
                    />
                    Básico
                </LabelRadioComponent>
                <LabelRadioComponent>
                    <InputRadioComponent 
                        type="radio"
                        name="plan"
                        value="complete"  
                        checked={ plan === 'complete' }
                        onChange={ handleChange }
                    />
                    Completo
                </LabelRadioComponent>
            </FieldComponent>
            <FieldComponent>
                <ButtonComponent type="submit">Cotizar</ButtonComponent>
            </FieldComponent>
        </form>
    );
}

export default QuotationForm;