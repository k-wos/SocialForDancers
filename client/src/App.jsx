import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoutes";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import { setAuthToken } from "./utils/setAuthToken";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import Dancers from "./pages/Dancers";
import Profile from "./components/profile/Profile";
import Posts from "./pages/Posts";
import Ads from "./pages/Ads";
import NotFound from "./pages/NotFound";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dancers" element={<Dancers />} />
                    <Route path="/dancers/:id" element={<Profile />} />
                    <Route path="/ads" element={<Ads />} />
                    <Route path="*" element={<NotFound />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/create-profile"
                        element={
                            <PrivateRoute>
                                <CreateProfile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/edit-profile"
                        element={
                            <PrivateRoute>
                                <EditProfile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/posts"
                        element={
                            <PrivateRoute>
                                <Posts />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
