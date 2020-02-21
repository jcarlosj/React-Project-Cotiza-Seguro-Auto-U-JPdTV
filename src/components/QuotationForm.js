import React from 'react';
import styled from '@emotion/styled';

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
const SpanComponent = styled .span `
    font-size: 1.4rem;
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

/** Component */
const QuotationForm = () => {
    return (
        <form>
            <FieldComponent>
                <LabelComponent>Marca</LabelComponent>
                <SelectComponent>
                    <option value="">-- Seleccione --</option>
                    <option value="americanos">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </SelectComponent>
            </FieldComponent>
            <FieldComponent>
                <LabelComponent>Año</LabelComponent>
                <SelectComponent>
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
                <LabelComponent>Plan</LabelComponent>
                <InputRadioComponent 
                    type="radio"
                    name="plan"
                    value="basico"  
                /><SpanComponent>Básico</SpanComponent>
                <InputRadioComponent 
                    type="radio"
                    name="plan"
                    value="completo"  
                /><SpanComponent>Completo</SpanComponent>
            </FieldComponent>
            <FieldComponent>
                <ButtonComponent type="button">Cotizar</ButtonComponent>
            </FieldComponent>
        </form>
    );
}

export default QuotationForm;