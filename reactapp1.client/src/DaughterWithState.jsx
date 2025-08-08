import React from 'react';
function DaughterWithState(props) {
    return <><h1>{props.data}</h1> <button onClick={(e) => props.setData(e.target.value)}>CLICK</button> </>;
}
export default DaughterWithState;
