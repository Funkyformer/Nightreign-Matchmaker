import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;