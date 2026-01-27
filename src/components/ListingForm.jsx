import { useState } from 'react';
import Hider from './Hider';
import bossList from './bosses.json'
import styles from './CSS Modules/ListingForm.module.css'

function ListingForm() {
    
    const bosses = bossList.bosses;
    const regBosses = bosses.map(boss => [`reg${boss.id}`, false]);
    const darkBosses = bosses.map(boss => {
        if (boss.dark == true) {
            return [`dark${boss.id}`, false];
        }})
        .filter(function(element) {
            return element !== undefined;
        });
    const allBosses = Object.fromEntries([...regBosses, ...darkBosses]);
    const [inputs, setInputs] = useState(allBosses);
    const handleCheck = (e) => {
        const name = e.target.name;
        setInputs(values => ({...values, [name]: !values[name]}))
    }

    return (
        <form>
            <Hider className = {styles.hider}>
                <ul className = {styles.bosses}>
                    {bosses.map(boss =>
                        <li key={'reg'+boss.id}>
                            <label>
                                <input type='checkbox' name={`reg${boss.id}`} checked={inputs[`reg${boss.id}`]} onChange = {handleCheck} />
                                {` ${boss.name}`}
                            </label>
                        </li>
                    )}
                </ul>
                
                <ul className = {styles.bosses}>
                    {bosses.map(boss =>
                        {if(boss.dark == true) {
                            return <li key={'dark'+boss.id}>
                                <label>
                                    <input type='checkbox' name={`dark${boss.id}`} checked={inputs[`dark${boss.id}`]} onChange = {handleCheck} />
                                    {` Everdark ${boss.name}`}
                                </label>
                            </li>
                        }}
                    )}
                </ul>
            </Hider>
        </form>
    )
}

export default ListingForm;