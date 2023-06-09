import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ErrorPage, DetailsPage } from '../../Pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* / == endereço principal */}
                <Route path='/' element={<HomePage/>} />
                {/* /details == rota de mais detalhes */}
                <Route path='/details' element={<DetailsPage/>} />
                {/* * == qualquer rota que não esteja listado */}
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;