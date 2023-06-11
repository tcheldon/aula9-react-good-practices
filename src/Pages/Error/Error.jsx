import { Link } from "react-router-dom";

// (página) componente Error
const Error = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Error;