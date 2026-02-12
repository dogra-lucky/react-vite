import  { Toaster } from 'react-hot-toast';

import './App.css'
import { AppRoutes } from './app/routes';
function App() {

    return (
        <>
            <AppRoutes />
            <Toaster position="top-right" />
        </>
    );
}

export default App
