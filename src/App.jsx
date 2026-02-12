import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateListing from "./CreateListing";
import Header from "./components/Header";
import ViewListings from "./ViewListings";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/create" Component={CreateListing}/>
                <Route path="/view" Component={ViewListings}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;