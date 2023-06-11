import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../../data";

// (página) componente Details
const Details = () => {

    // hook para mudança de estado
    const [user, setUser] = useState(undefined);

    // hook para obter parametros
    const parameters = useParams();

    // hook para execução de efeitos colaterais (mudança na página)
    // Pode incluir chamadas de API, manipulação do estado, etc.
    useEffect(() => {
        // variável que pega o id como parâmetro
        const { id } = parameters;
        
        // variável que busca  dentro da array users se o user.id é igual ao id definido em parameters
        const result = users.find((user) => user.id === id);
        
        if (!result) {
            setUser(null);
            return;
        }
        setUser(result);
    }, [parameters]);

    return (
        <div>
            <h1>Detalhes</h1>
            {/* caso demore para carregar printa na tela */}
            {user === undefined && (
                <div>
                    <p>Carregando...</p>
                </div>
            )}
            {/* caso não encontre o id desejado */}
            {user === null && (
                <div>
                    <h3>Usuário não encontrado</h3>
                </div>
            )}
            {/* condicional equivalente ao if */}
            {/* se for verdadeiro renderiza */}
            {user && (
                <div>
                    <img src={user.image.src} alt={user.image.alt} />
                    <h2>{user.name}</h2>
                    <p>{user.team}</p>
                </div>
            )}
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Details;