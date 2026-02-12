import axios from "axios";
import decodeList from "./decodeList";
import { useState, useEffect } from 'react';
import Listing from "./Listing";
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
            {list.map(listing => <Listing key={listing.listingID}props={listing}/>)}
            <input type="button" onClick={handleClick} value="print listings"/>
        </div>
    )
}
export default ListingsViewer;