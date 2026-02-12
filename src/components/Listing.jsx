import PlayerViewer from "./PlayerViewer";
import styles from './CSS Modules/Listing.module.css'

function Listing( {props} ) {
    return (
        <div className = {styles.container}>
            <div>{props.username}</div>
            <div>{props.description}</div>
            <div>
                <PlayerViewer character={props.char01}/>
                <PlayerViewer character={props.char02}/>
                <PlayerViewer character={props.char03}/>
            </div>
        </div>
    )
}

export default Listing;