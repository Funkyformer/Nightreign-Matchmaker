import axios from "axios";
import decodeList from "./decodeList";
import { useState, useEffect } from 'react';
import Listing from "./Listing";
import styles from "./CSS Modules/ListingsViewer.module.css"
function ListingsViewer() {

    const [list, setList] = useState([]);

    useEffect(() => {
        const getListings = async () => {
            await axios.get('/all')
            .then(res => {
                console.log(res);
                setList(res.data.map(listing => decodeList(listing)));
            })
            .catch(err => console.log(err));
        }
        getListings()
    }, []);

    const handleClick = () => {
        console.log(list);
    }

    return (
        <div>
            <div>THIS IS DUMMY TEXT FOR WHERE FILTER OPTIONS WILL GO</div>
            <div className = {styles.listingsHolder}>
                {list.map(listing => <Listing key={listing.listingID}props={listing}/>)}
            </div>
            <input type="button" onClick={handleClick} value="print listings"/>
        </div>
    )
}
export default ListingsViewer;