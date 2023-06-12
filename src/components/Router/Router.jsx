import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, DetailsPage } from '../../Pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/details/:id" element={<DetailsPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;