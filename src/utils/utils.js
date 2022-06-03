function ComponentToHex(component){
    let hexaDecimal = component.toString(16);
    return hexaDecimal.length === 1 ? '0' + hexaDecimal : hexaDecimal
}

export default function rbgToHexadecimal(r, g, b){
    return '#' + ComponentToHex(r) +ComponentToHex(g) + ComponentToHex(b);
}