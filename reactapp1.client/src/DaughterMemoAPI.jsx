import React, { useState, memo } from 'react';
import GrandDaughter from './GrandDaughter';
import styles from './Daughter.module.css';
const DaughterMemoAPI = memo(function DaughterMemoAPI({ parentComponentStateChange, title}) {
    const [text, setText] = useState('0');
    parentComponentStateChange(setText);//через методы передаваемые в атрибутах мы можем наладить общение и влияние дочерних компонентов на родительские и наоборот
    return <div>
        <h1 class={styles.head1}>{title + text}</h1>
        <h2 class={styles.head2}>{title}</h2>
        <GrandDaughter count="4" text="LL" />
        <GrandDaughter count="2" text="BB" />
    </div>;
});
export default DaughterMemoAPI;