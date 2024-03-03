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
import Chat from "./pages/Chat";
import UsersAdmin from "./components/admin/users/users";
import AdminPanel from "./pages/AdminPanel";
import CreateUserAdmin from "./components/admin/users/createUser";
import EditUserAdmin from "./components/admin/users/EditUser";
import CreateAdd from "./components/advertisment/CreateAd";
import Market from "./pages/Market";

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
                    <Route path="/market" element={<Market />} />

                    <Route path="/create-ad" element={<CreateAdd />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/admin-users" element={<UsersAdmin />} />
                    <Route
                        path="/admin-users-create"
                        element={<CreateUserAdmin />}
                    />
                    <Route
                        path="/admin-users-update/:id"
                        element={<EditUserAdmin />}
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ads"
                        element={
                            <PrivateRoute>
                                <Ads />
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
