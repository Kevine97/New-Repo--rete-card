import { Layout } from './layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import SignIn_Page from './pages/SignIn_Page';
import Home from './pages/Home/Home';

export function App() {
    return (
        // <Layout></Layout>
        <Routes>
            <Route path={'/'} element={<SignIn_Page />} />
            <Route
                path={'/home'}
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route path={'*'} element={<> ERROR 404 </>} />
        </Routes>
    );
}
