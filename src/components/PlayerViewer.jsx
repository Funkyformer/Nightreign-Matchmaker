function PlayerViewer({character}) {
    const isNull = character == null;
    return (
        <div>
            { isNull ? 
                ('no char selected'):
                (Object.keys(character).map(char => <div key={char}>{char}</div>))
            }
        </div>
    )
}
export default PlayerViewer;