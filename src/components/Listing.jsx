import PlayerViewer from "./PlayerViewer";
import styles from './CSS Modules/Listing.module.css'
import TargetViewer from "./TargetViewer";

function Listing( {props} ) {
    return (
        <div className = {styles.container}>
            <div className = {`${styles.username} ${styles.cell} ${styles.left}`}>{props.username}</div>
            <div className = {`${styles.description} ${styles.cell}`}>{props.description}</div>
            <div className = {styles.charHolder}>
                <PlayerViewer character={props.char01} className = {`${styles.character} ${styles.cell}`}/>
                <PlayerViewer character={props.char02} className = {`${styles.character} ${styles.cell}`}/>
                <PlayerViewer character={props.char03} className = {`${styles.character} ${styles.cell}`}/>
            </div>
            <div className = {`${styles.platform} ${styles.cell} ${styles.left}`}>{props.platform}</div>
            <TargetViewer target = {props.targets} className = {`${styles.targets} ${styles.cell} ${styles.left}`} img1 = {styles.depImg} img2 = {styles.tarImg}/>
        </div>
    )
}

export default Listing;