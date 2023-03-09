//define router using react router dom\
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Test from '../pages/Test/Test';
import SignIn_Page from '../pages/SignIn_Page';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={URL.Home.url} element={<SignIn_Page />}/>
                <Route path={URL.Error404.url} element={<> Error 404 </>}/> */}
            </Routes>
        </BrowserRouter>
    );
};
