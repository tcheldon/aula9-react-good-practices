import Item from "../Item";

function List({ items = [], onItemClick }){

    // manipulador de eventos que lida comm cliques
    const handleItemClick = (item) => {
        onItemClick && onItemClick(item);
    }

    // função de loop usado em react
    const map = items.map((item) => {
        return <Item key={item.id} item={item} onItemClick={handleItemClick} />
    });

    return (
        <div>
            <h2>Lista de Usuários</h2>
            {/* faz renderizar os vários itens listados*/}
            <ul>
                {map}
            </ul>
        </div>
    );
}

export default List;