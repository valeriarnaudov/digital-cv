import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <AuthContextProvider
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            >
                <NavBar />
                <ToastContainer />
                <Routes>
                    <Route path={"/"} element={<SignIn />} />
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
