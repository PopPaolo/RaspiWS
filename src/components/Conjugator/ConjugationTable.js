import React from 'react';

function ConjugationTable({ verb, conjugation }) {
    return (
        <div style={{ width: '50', userSelect: "none"}}>
            <h4>Present Tense Conjugation for "{verb}"</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Persona</th>
                            <th>Forma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conjugation.map((item, index) => (
                            <tr key={index}>
                                <td style={{ width: '10%' }} className="mb=1">{item.label}</td>
                                <td>{item.form}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ConjugationTable;
