import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css';
import styles from './CSS Modules/Main.module.css'
import axios from 'axios'

axios.defaults.baseURL = `http:${window.location.href.split(":")[1]}${import.meta.env.VITE_DATABASE_URL}`;
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
console.log(axios.defaults.baseURL);

createRoot(document.getElementById('root')).render(
  <div className = {styles.body}>
    <App />
  </div>
)  