function PlayerViewer({character, className}) {
    const isNull = character == null;
    return (
        <div className = {className}>
            { isNull ? 
                ('no char selected'):
                (Object.entries(character).map(([char, val]) => {if (val) return <img key={char} src={`/images/nightfarers/${char}.webp`} alt = {char}/>}))
            }
        </div>
    )
}
export default PlayerViewer;