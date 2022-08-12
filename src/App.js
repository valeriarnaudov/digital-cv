import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Protected from "./components/Protected";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/signin"} element={<SignIn />} />
                    <Route
                        path={"/account"}
                        element={
                            <Protected>
                                <Account />
                            </Protected>
                        }
                    />
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
