import { useState } from 'react';
import styles from './CSS Modules/Hider.module.css';


function Hider(props) {
    const [hidden, setHidden] = useState(false);

    return (
        <div className = {styles.hider}>
            <button type = 'button' onClick = {() => setHidden(!hidden)}>Click me to toggle</button>
            <div hidden = {hidden}>
                {props.children}
            </div>
        </div>
    )
}
export default Hider;