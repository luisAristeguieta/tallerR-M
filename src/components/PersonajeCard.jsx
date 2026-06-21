function PersonajeCard(props) {
    const { char } = props;

    return (
        <div className="card" >
            <img src={char.image} alt={char.name} />
            <div className="card-content">
                <h3>{char.name}</h3>
                <p><strong>Especie:</strong> {char.species}</p>
                <p><strong>Estado:</strong> {char.status}</p>
            </div>
        </div>
    );
}

export default PersonajeCard