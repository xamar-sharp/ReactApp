import React, { useState, useEffect, useLayoutEffect,useRef,useMemo,useDeferredValue, useInsertionEffect,useCallback,useTransition } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import Daughter from './Daughter';
import './styles.css';
import styled from 'styled-components';
import Parent1 from './Parent1';
import DaughterMemoAPI from './DaughterMemoAPI';
import DaughterWithState from './DaughterWithState';
function App() {
    const [bc, setBc] = useState('green');
    const [title, setTitle] = useState('Default');
    function onEnterDown(keyEvNativeObj) {
        if (keyEvNativeObj.keyCode === 13) {
            setBc('blue');
        }
    }
    useLayoutEffect(() => {
       
    }, []);
    useInsertionEffect(() => {
        
    }, []);
    useEffect(() => {
        document.title = title;
        document.body.style.backgroundColor = bc;
        window.addEventListener('keydown', onEnterDown);
        return () => {
            window.removeEventListener('keydown', onEnterDown);
        };
    }, [title, bc]);
    const Class5 = styled.input`
    color: green;
    display: flex;
	flex-direction: column;
    background-color:${(props) => (props.customAttr ? 'yellow' : 'blue')};
    font-size:50px;
    `;
    const Class5Ext = styled(Class5)`
    color:'red',
    font-size:47px;
    `;
    const DivCont = styled.div`
    padding: 10px;
    background-color:yellow;
    `;
    const CustomH1 = styled.h1`
    color: blue;
    font-size:20px;
    background-color: orchid;
    `;
    const htmlPart = <DivCont>
        <Class5Ext placeholder="Phone" />
        <Class5 placeholder="Email" />
        <Class5 placeholder="Password" type="text" customAttr />
        <CustomH1>Styled components is modern way to style ReactJS!</CustomH1>
    </DivCont>;
    const apiItems = [
        { id: nanoid(), value: 1 },
        { id: nanoid(), value: 23 },
        { id: nanoid(), value: -12 },
        { id: nanoid(), value: 24.5 }
    ];
    const tags = apiItems.map((el) => {
        return <td key={el.id}>{el.id} = {el.value}</td>;
    });
    function get_input() {
        return <input />;
    };
    function clickHandler(paramValue, eventNativeObject) {
        alert("Clicked!" + paramValue);
        console.log(eventNativeObject);
    }
    let arr = ['C#', "Java"];
    const obj = {
        name: 'Mark', age: 19
    }
    const el1 = <span>{arr[0]}</span>;
    const el2 = <span>{arr[1]}</span>;
    let el3 = false;
    if (el3) {
        el3 = <h1>A</h1>;
    }
    else {
        el3 = <div><p>B</p><p>C</p></div>;
    }
    let arrayOfTags = [<li>Z</li>, <li>W</li>, <li>Y</li>];
    let secArray = [1, 2, 3, 4, 5, 6];
    secArray = secArray.map((el, index) => {
        return <td key={index}>{el}:{index}</td>;
    });
    const el4 = <><h1>{obj.name}</h1> <i>{obj.age}</i></>;
    function onChangeEmail(eventObj) {
        setEmail(eventObj.target.value);
    }
    const [areaText, setAreaText] = useState("");
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState();
    const [notes, setNotes] = useState([1, 2, 3]);
    const [obj1, setObj1] = useState({ prop1: 1, prop2: 2, prop3: 3 });
    const [apiObjects, setApiObjects] = useState([{ prop1: 1, prop2: 4 }, { prop1: 2, prop2: 3 }, { prop1: 11, prop2: 22 }]);
    function handleChangeApiObjects(index, propName, event) {
        const copy = Object.assign([], apiObjects);
        copy[index][propName] = event.target.value;
        setApiObjects(copy);
    }
    function handleChange(prop, event) {
        setObj1({ ...obj1, ...{ [prop]: event.target.value } });
    }
    const part = <div>
        <input value={obj1.prop1} onChange={event => handleChange('prop1', event)} />
        <input value={obj1.prop2} onChange={event => handleChange('prop2', event)} />
        <input value={obj1.prop3} onChange={event => handleChange('prop3', event)} />
        <br />
        {obj1.prop1}-{obj1.prop2}-{obj1.prop3}
    </div>;
    function changeHandler(index, event) {
        setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
    }
    let other = "";
    const class3 = {
        color: 'purple',
        backgroundColor: 'white',
        fontSize: '40px'
    };
    const class4 = {
        color: 'orange',
        backgroundColor: 'red',
        fontSize: '10px'
    };
    function communicate(setDaughterState) {
        other = <h1>OTHER</h1>
    }
    const [value1, setValue1] = useState("CSharp");
    const firstRef = useRef(null);
    function refHandler() {
        firstRef.current.focus();
    }
    const [res1, setRes1] = useState(0);
    function hardOperation(state) {
        return performance.now - 500 * state;
    }
    const resutl = useMemo(() => hardOperation(res1), [res1])
    const [data, setData] = useState('');
    const [isPending, startTransition] = useTransition();
    const [data1, setData1] = useState('');
    function handleClick34(e) {
        startTransition(() => {
            setData1(e.target.value);
        });
    }
    const defferedValue1 = useDeferredValue(data1);
    return (
        <>
            <input value={data1} onChange={(e)=>handleClick34(e)}/>
            <h2>{data1} - {isPending}</h2>
            <h3>{defferedValue1}</h3>
            <DaughterWithState data={data} setData={setData}/>
            <DaughterMemoAPI title="Этот компонент будет ререндерится при повторном use только если атрибуты изменятся" parentComponentStateChange={communicate} />
            <input value={res1} onChange={(ev) => setRes1(ev.target.value)} />
            <h1>After hard operation with memorization: {resutl}</h1>
            <br/>
            <input ref={firstRef} />
            <button onClick={refHandler}>FOCUS</button>
            <Parent1 />
            <input value={bc} onChange={(ev) => setBc(ev.target.value)} />
            <input value={title} onChange={(ev) => setTitle(ev.target.value)} />
            {htmlPart}
            <Daughter title="Some items:" parentComponentStateChange={communicate} />
            {other}
            <input class="class1" value={apiObjects[0]["prop1"]} onChange={(ev) => handleChangeApiObjects(0, 'prop1', ev)} />
            <input class="class2" value={apiObjects[0]["prop2"]} onChange={(ev) => handleChangeApiObjects(0, 'prop2', ev)} />
            <input style={class3} value={apiObjects[1]["prop1"]} onChange={(ev) => handleChangeApiObjects(1, 'prop1', ev)} />
            <input style={class4} value={apiObjects[1]["prop2"]} onChange={(ev) => handleChangeApiObjects(1, 'prop2', ev)} />
            <h4>{apiObjects[0]["prop1"]} - {apiObjects[0]["prop2"]} - {apiObjects[1]["prop1"]} - {apiObjects[1]["prop2"]}</h4>
            <h2>!!!</h2>
            {part}
            <input style={{ color: 'white', backgroundColor: 'orchid', fontSize: '24px' }} value={notes[0]} onChange={event => changeHandler(0, event)} />
            <input value={notes[1]} onChange={event => changeHandler(1, event)} />
            <input value={notes[2]} onChange={event => changeHandler(2, event)} />
            <h2>{notes[0] * notes[1] * notes[2]}</h2>
            <span>HHHHH</span>
            <input type="checkbox" defaultChecked="true" />
            <input defaultValue="Без привязки к стейту" />
            <div>
                <div>
                    <span>C#:</span>
                    <input type="radio" name="group1" value="CSharp" onChange={(e) => setValue1(e.target.value)} checked={value1 == "CSharp" ? true : false} />
                </div>
                <div>
                    <span>Java:</span>
                    <input type="radio" name="group1" value="Java" onChange={(e) => setValue1(e.target.value)} checked={value1 == "Java" ? true : false} />
                </div>
                <div>
                    <span>JavaScript:</span>
                    <input type="radio" name="group1" value="JavaScript" onChange={(e) => setValue1(e.target.value)} checked={value1 == "JavaScript" ? true : false} />
                </div>
                <h3>Value is {value1}</h3>
            </div>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
            </select>
            <h3>{selected}</h3>
            <input type="checkbox" value={checked} onChange={setChecked} />
            <textarea value={areaText} onChange={(e) => setAreaText(e.target.value)} />
            <span>Вы ввели: {areaText}</span>
            <table>
                <tbody>
                    <tr>
                        {secArray}
                    </tr>
                    <tr>{tags}</tr>
                </tbody>
            </table>
            <ol>
                <li> dfgfg {el1} 3333 {el2} cccc</li>
                <li>{el2}</li>
                <li>{el4}</li>
                <li>{el3}</li>
                <li>{!(arr.length === 2) && <h6>Если arr.length равно двум, то НЕ вставлять это содержимое</h6>}</li>
                <li>{arr.length === 2 ? <h1>Yes</h1> : <h2>No</h2>}</li>
                <li>{arr[0] + arr[1]} {23 ** 2}</li>
                <li>{get_input()}</li>
            </ol>
            <ul>
                {arrayOfTags}
            </ul>
            <button onClick={clickHandler}>CLICK</button>
            <button onClick={(eventObj) => clickHandler(23, eventObj)}>NOT CLICK</button>

        </>);
}
export default App;
