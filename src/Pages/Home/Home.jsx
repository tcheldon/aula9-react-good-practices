// immoprtação de hook
import { useNavigate } from 'react-router-dom';
// List sem {} por ser o componente direto
import List from '../../components/List';
// users entre {} por ser elemento de data
import { users } from '../../data';

const Home = () => {

    const navigate = useNavigate();

    const handleItemClick = (item) => {
        navigate(`/details/${item.id}`);
    }

    return (
        <div>
            <h1>Home</h1>
            <List items={users} onItemClick={handleItemClick} />
        </div>
    );
};

export default Home;