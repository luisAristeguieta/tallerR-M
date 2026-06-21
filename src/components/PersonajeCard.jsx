function PersonajeCard(props) {
    const {char} = props;

    return (
        <div>
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p><strong>Especie:</strong> {char.species}</p>
            <p><strong>Estado:</strong> {char.status}</p>
        </div>
    );
}

export default PersonajeCard