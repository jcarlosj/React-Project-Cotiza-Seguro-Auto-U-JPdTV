/** Diferencia de años con el Año Actual */
export const getDifferenceInYears = ( year ) => {
    return new Date() .getFullYear() - year;
}

/** Calcula costo por marca */
export const getCostPerBrand = ( brand ) => {
    let increment = 0;

    switch( brand ) {
        case 'european':
            increment=1.30;
            break;
        case 'american':
            increment=1.15;
            break;
        case 'asiatic':
            increment=1.05;
            break;
        default:
            break;
    }

    return increment;
}

/** Calcula costo por marca */
export const getCostPerPlan = ( plan ) => {
    return ( plan === 'basic' ? 1.2 : 1.5 );
}