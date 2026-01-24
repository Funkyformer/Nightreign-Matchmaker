import { useState } from 'react';
import Hider from './Hider';
import bossList from './bosses.json'
import styles from './CSS Modules/ListingForm.module.css'

function ListingForm() {

    const [inputs, setInputs] = useState({});
    const bosses = bossList.bosses;
    const handleChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <form>
            <Hider className = {styles.hider}>
                <ul className = {styles.bosses}>
                    {bosses.map(boss =>
                        <li key={'reg'+boss.id}>
                            <label>
                                <input type='checkbox' name={`reg${boss.id}`} checked={`inputs.reg${boss.id}`} onChange = {handleChange} />
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
                                    <input type='checkbox' name={`dark${boss.id}`} checked={`inputs.dark${boss.id}`} onChange = {handleChange} />
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