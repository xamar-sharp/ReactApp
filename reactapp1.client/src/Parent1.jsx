import { useState } from 'react';
import ContextModel from './ContextModel';
import Daughter1 from './Daughter1';
function Parent1() {
    const [forDaughterText, setForDaughterText] = useState("Default");
    return <>
        <input value={forDaughterText} onChange={(e) => setForDaughterText(e.target.value)} />
        <ContextModel.Provider value={{ text:forDaughterText, bc: 'orchid' }}>
            <Daughter1 />
        </ContextModel.Provider> </>;
}
export default Parent1;