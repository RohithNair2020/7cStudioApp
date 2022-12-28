import { useState } from 'react';
import './App.css';
import { BrowserRouter, Outlet } from 'react-router-dom';
import PageContainer from './Containers/PageContainer/PageContainer';
import SidebarContainer from './Containers/SidebarContainer/SidebarContainer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <BrowserRouter>
                <SidebarContainer />
                <PageContainer />
            </BrowserRouter>
        </div>
    );
}

export default App;
