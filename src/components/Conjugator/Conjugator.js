import React, { useState, useEffect } from 'react';
import ConjugationForm from './ConfigurationForm';
import ConjugationTable from './ConjugationTable';
import "./styling/Conjugator.css";
const italianVerbs = require('italian-verbs');
const ItalianVerbsList = require('italian-verbs-dict/dist/verbs.json');

function Conjugator() {
    const [input, setInput] = useState('essere');
    const [verb, setVerb] = useState('essere');
    const [conjugation, setConjugation] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const persons = ['1', '2', '3', '1', '2', '3'];
        const numbers = ['S', 'S', 'S', 'P', 'P', 'P'];
        const labels = ['Io', 'Tu', 'Lui/Lei', 'Noi', 'Voi', 'Loro'];
        let newConjugation = [];

        try {
            for (let i = 0; i < persons.length; i++) {
                newConjugation.push({
                    label: labels[i],
                    form: italianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', persons[i], numbers[i])
                });
            }
            setError(null);
        } catch (err) {
            setError('Invalid verb. Please enter a valid Italian verb.');
        }

        setConjugation(newConjugation);
    }, [verb]);

    const updateVerb = () => {
        setVerb(input.toLowerCase());
    }

    return (
        <div className="container">
            <h1>Coniugazione Verbi</h1>
            <ConjugationForm input={input} setInput={setInput} updateVerb={updateVerb} />
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <ConjugationTable verb={verb} conjugation={conjugation} />
            )}
        </div>
    );
}

export default Conjugator;
