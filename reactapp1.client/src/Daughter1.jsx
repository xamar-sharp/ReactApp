import React, { useContext } from 'react';
import ContextModel from './ContextModel';
function Daughter1() {
    //without props альтернативно используем значение(может быть любым-наапример сложным объектом со множеством свойств)контекст хук
    const parentState = useContext(ContextModel);
    return <h1 style={{ backgroundColor: parentState.bc }}>
        {parentState.text}
    </h1>;
}
export default Daughter1;