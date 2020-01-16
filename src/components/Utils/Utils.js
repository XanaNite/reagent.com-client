export function inputValue(value){
    let data = (!value) ? 'Not entered' : value;
    return data;
}

export function inputSlogan(value){
    let data = (!value) ? null : `"${value}"`;
    return data;
}

export function multipleInputValues(value){
    let data = value.join(', ')
    return data;
}