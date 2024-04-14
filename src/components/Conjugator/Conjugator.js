// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import ConjugationForm from './ConfigurationForm';
import ConjugationTable from './ConjugationTable';
import "./styling/Conjugator.css";
const italianVerbs = require('italian-verbs');
const ItalianVerbsList = require('italian-verbs-dict/dist/verbs.json');

/**
 * Conjugator function component.
 * This component is responsible for handling the conjugation of Italian verbs.
 */
function Conjugator() {
    // State variables
    const [input, setInput] = useState('essere'); // Input verb
    const [verb, setVerb] = useState('essere'); // Verb to be conjugated
    const [conjugation, setConjugation] = useState([]); // Conjugation result
    const [error, setError] = useState(null); // Error message

    // Effect hook to update the conjugation when the verb changes
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
            setConjugation(newConjugation);
        } catch (err) {
            setError('Invalid verb. Please enter a valid Italian verb.');
        }
    }, [verb]);

    /**
     * Function to update the verb state.
     * It first checks if the input verb is valid before updating the state.
     */
    const updateVerb = () => {
        try {
            italianVerbs.getConjugation(ItalianVerbsList, input.toLowerCase(), 'PRESENTE', '1', 'S');
            setError(null);
            setVerb(input.toLowerCase());
        } catch (err) {
            setError('Invalid verb. Please enter a valid Italian verb.');
        }
    }

    // Render the Conjugator component
    return (
        <div className="container">
            <h1 style={{ color: "#ddd" }}>Coniugazione Verbi</h1>
            <ConjugationForm input={input} setInput={setInput} updateVerb={updateVerb} error={error} />
            <ConjugationTable verb={verb} conjugation={conjugation} />
        </div>
    );
}

// Export the Conjugator component
export default Conjugator;
