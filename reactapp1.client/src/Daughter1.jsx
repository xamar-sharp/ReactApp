import React, { useContext } from 'react';
import ContextModel from './ContextModel';
function Daughter1() {
    const parentState = useContext(ContextModel);
    return <h1 style={{ backgroundColor: parentState.bc }}>
        {parentState.text}
    </h1>;
}
export default Daughter1;