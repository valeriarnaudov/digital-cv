import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateAccount from "./pages/CreateAccount";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <NavBar />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Routes>
                    <Route path={"/"} element={<SignIn />} />
                    <Route path={"/account/:uid"} element={<Account />} />
                    <Route
                        path={"account/:uid/create"}
                        element={
                            <Protected>
                                <CreateAccount />
                            </Protected>
                        }
                    />
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
