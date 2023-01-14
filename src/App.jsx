import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginContainer from './Containers/LoginContainer/LoginContainer';
import PageContainer from './Containers/PageContainer/PageContainer';
import SidebarContainer from './Containers/SidebarContainer/SidebarContainer';
import DashboardContainer from './Containers/DashboardContainer/DashboardContainer';
import ArtistsContainer from './Containers/ArtistsContainer/ArtistsContainer';
import SongsContainer from './Containers/SongsContainer/SongsContainer';
import OTPContainer from './Containers/OTPContainer/OTPContainer';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/login" element={<LoginContainer />} />
                <Route path="/authenticate" element={<OTPContainer />} />
                <Route
                    path="/dashboard"
                    element={
                        <>
                            <SidebarContainer />
                            <PageContainer />
                        </>
                    }
                >
                    <Route index element={<DashboardContainer />} />
                    <Route path="artists" element={<ArtistsContainer />} />
                    <Route path="songs" element={<SongsContainer />} />
                </Route>
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </div>
    );
}

export default App;
