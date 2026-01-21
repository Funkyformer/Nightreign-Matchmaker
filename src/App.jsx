import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateListing from "./CreateListing";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/create" Component={CreateListing}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;