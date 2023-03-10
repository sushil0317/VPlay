import Layout from "./components/organisms/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/organisms/LoginSignup";
import VideoDetail from "./components/organisms/VideoDetail";
function App() {
    return (
        <div className="text-white bg-dark font-gothic">
            <Router>
                {" "}
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/auth" element={<LoginSignup />} />
                    <Route path="/video/:id" element={<Layout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
