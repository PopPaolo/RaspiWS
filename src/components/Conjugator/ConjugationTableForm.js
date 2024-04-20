import { Button } from "@mui/material";
import React from "react";
import AutorenewIcon from '@mui/icons-material/Autorenew';

function ConjugationTableForm({ verb, conjugation, handleFlip, inputsRef }) {

    const checkEntry = (e, item) => {
        return e.target.value.toLowerCase() === item.form.toLowerCase();
    }

    return (
        <div style={{ userSelect: "none" }}>
            <table className="table table-striped border border-3 border-color-black">
            <thead>
                    <tr>
                        <th
                            colSpan="2"
                            style={{ backgroundColor: '#f56800', color: '#fff' }}>
                            <div className="d-flex flex-row">
                                <div className="d-inline-flex flex-grow-1 justify-content-center align-items-center text-uppercase">
                                    {verb}
                                </div>
                                <Button
                                    onClick={handleFlip}
                                    sx={{
                                        backgroundColor: "#f56800",
                                        borderColor: "#ffd700",
                                        border: 1,
                                        color: "#fff",
                                        minWidth: '20px',
                                        "&:hover": {
                                            backgroundColor: "#b64500",
                                        },
                                    }}
                                >
                                    <AutorenewIcon />
                                </Button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {conjugation.map((item, index) => (
                        <tr key={index}>
                            <td className="align-middle">{item.label}</td>
                            <td>
                                <input
                                    type="text"
                                    id={index}
                                    className="form-control-sm"
                                    ref={(e) => inputsRef.current[index] = e}
                                    onChange={(e) => {checkEntry(e, item) ? e.target.style.color = "green": e.target.style.color = "red"}}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default ConjugationTableForm;
