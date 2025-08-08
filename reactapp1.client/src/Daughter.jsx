import React, { useState,memo } from 'react';
import GrandDaughter from './GrandDaughter';
import styles from './Daughter.module.css';
function Daughter(attributes) {
    const [text, setText] = useState('0');
    attributes.parentComponentStateChange(setText);//через методы передаваемые в атрибутах мы можем наладить общение и влияние дочерних компонентов на родительские и наоборот
    return <div>
        <h1 class={styles.head1}>{attributes.title + text}</h1>
        <h2 class={styles.head2}>{attributes.title}</h2>
        <GrandDaughter count="4" text="LL" />
        <GrandDaughter count="2" text="BB" />
    </div>;
}
export default Daughter;