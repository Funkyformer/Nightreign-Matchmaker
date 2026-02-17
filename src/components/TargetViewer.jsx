function TargetViewer({target, className, img1, img2}) {
    const isObj = typeof target == 'object';
    return (
        <div className = {className}>
            { isObj ? 
                (Object.entries(target).map(([tar, val]) => {
                    if (val) return <img key={tar} src={`/images/bosses/${tar}.webp`} alt = {`${tar} icon`} className = {img2}/>
                })) :
                <img src={`/images/depths/depth${target}.webp`} alt = {`Depth ${target} icon`} className = {img1}/>
                // null
            }
        </div>
    )
}
export default TargetViewer;