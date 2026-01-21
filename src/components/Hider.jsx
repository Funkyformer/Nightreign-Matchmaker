import { useState } from 'react';


function Hider(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className = 'hider'>
            <div hidden = {hidden}>
                {props.children}
            </div>
            <button type = 'button' onClick = {() => setHidden(!hidden)}>Click me to toggle</button>
        </div>
    )
}
export default Hider;