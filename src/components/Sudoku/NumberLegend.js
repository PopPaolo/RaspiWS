function NumberLegend({size, updateNumber}) {
    const isSmall = size === "small";
    const isMid = size === "medium";

    const fontSize = isSmall ? "6vw" : isMid ? "5vw" : "3vw";
    const boxSide = isSmall ? "9vw" : isMid ? "7vw" : "4vw";

    const NumBlock = ({num}) => {
        return (
            <button
                type="button"
                onClick={() => {updateNumber(num)}}
                className="justify-content-center align-items-center border-dark-subtle border border-1"
                style={{
                    width: boxSide,
                    height: boxSide,
                    fontSize: fontSize,
                }}
            >
                {num}
            </button>
        )
    }

    return (
        <div
            className="d-inline-flex position-absolute bottom-0 start-50 translate-middle-x border border-2 border-black"
        >
            <NumBlock num={1} />
            <NumBlock num={2} />
            <NumBlock num={3} />
            <NumBlock num={4} />
            <NumBlock num={5} />
            <NumBlock num={6} />
            <NumBlock num={7} />
            <NumBlock num={8} />
            <NumBlock num={9} />
        </div>
    )
}

export default NumberLegend;