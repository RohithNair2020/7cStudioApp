import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginContainer from './Containers/LoginContainer/LoginContainer';
import PageContainer from './Containers/PageContainer/PageContainer';
import SidebarContainer from './Containers/SidebarContainer/SidebarContainer';
import DashboardContainer from './Containers/DashboardContainer/DashboardContainer';
import ArtistsContainer from './Containers/ArtistsContainer/ArtistsContainer';
import SongsContainer from './Containers/SongsContainer/SongsContainer';
import OTPContainer from './Containers/OTPContainer/OTPContainer';
import { useEffect, useState } from 'react';
import useStore from './store';

function App() {
    const token = useStore((state) => state.token);
    console.log('zus tok', token);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/login"
                    element={
                        token ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <LoginContainer />
                        )
                    }
                />
                <Route path="/authenticate" element={<OTPContainer />} />
                {/* <PrivateRoute user={{ token: localStorage.getItem('token') }}>
                    <AppContainer user={user} />
                </PrivateRoute> */}
                <Route
                    path="/dashboard"
                    element={
                        token ? (
                            <>
                                <SidebarContainer />
                                <PageContainer />
                            </>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                >
                    <Route index element={<DashboardContainer />} />
                    <Route path="artists" element={<ArtistsContainer />} />
                    <Route path="songs" element={<SongsContainer />} />
                </Route>
                <Route
                    path="*"
                    element={
                        token ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
