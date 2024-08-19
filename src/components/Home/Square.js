function Square({ source, altText, maxHeight, top, left, isSmall=0}) {
    const frame = isSmall ? '7px ridge #eee' : '10px ridge #eee';
    return (
        <img
            className='position-relative'
            src={source}
            alt={altText}
            style={{
                width: 'auto',
                maxHeight: maxHeight,
                border: frame,
                boxShadow: '2px 3px 5px 0.5px rgba(0,0,0,0.5)',
                top: top,
                left: left
            }}
        ></img>
    )
}

export default Square;