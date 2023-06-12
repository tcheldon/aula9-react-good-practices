// (página) componente Item
function Item({ item, onItemClick }) {

    // identificador de clique
    const handleClick = () => {
        onItemClick && onItemClick(item);
    };

    return (
        <li>
            <h4>{item.name}</h4>
            <button type="button" onClick={handleClick}>Ver detalhes</button>
        </li>
    );
}

export default Item;