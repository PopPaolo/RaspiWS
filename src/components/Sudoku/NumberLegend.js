import { useMediaQuery, useTheme } from "@mui/material";


function NumberLegend() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const fontSize = isMatch ? "6vw" : "3vw";
    const boxSide = isMatch ? "9vw" : "4vw";
    const topMargin = isMatch ? "9vh" : "13vh";

    const NumBlock = ({num}) => {
        return (
            <div
                className="d-inline-flex justify-content-center align-items-center border-dark-subtle border border-1"
                style={{
                    width: boxSide,
                    height: boxSide,
                    fontSize: fontSize,
                }}
            >
                {num}
            </div>
        )
    }

    return (
        <div
            className="position-absolute top-50 translate-middle-y border border-2 border-black"
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