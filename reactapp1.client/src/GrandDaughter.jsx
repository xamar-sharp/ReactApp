import React from 'react';
function GrandDaughter(attributes) {
    let arr = [];
    for (let x = 0; x < attributes.count; x++) {
        arr.push(attributes.text);
    }
    arr = arr.map((el, index) => {
        return <li key={index} id={'item' + index}>{el}</li>
    });
    return <ol>{arr}</ol>;
}
export default GrandDaughter;