import axios from 'axios';
import { useState, useEffect } from 'react';
function decodeList() {
    // const axios = require('axios');
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/all')
        .then(res => {
            setItems(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (items)
}
export default decodeList;