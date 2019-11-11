

export function inputValue(value){
    let data = (value == null) ? 'Not entered' : value;
    return data;
}

export function multipleInputValues(value){
    let data = value.join(', ')
    return data;
}