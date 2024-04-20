// Importing necessary libraries and components
import React, { useState, useEffect, useRef } from 'react';
import ConjugationForm from './ConfigurationForm';
import ConjugationTable from './ConjugationTable';
import ReactCardFlip from 'react-card-flip';
import ConjugationTableForm from './ConjugationTableForm';
import translate from 'translate';
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
    const [isFlipped, setIsFlipped] = useState(false);
    const inputsRef = useRef([]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const reset = () => {
        inputsRef.current.forEach(input => input.value = "");
    }

    // Effect hook to update the conjugation when the verb changes
    useEffect(() => {
        const persons = ['1', '2', '3', '1', '2', '3'];
        const numbers = ['S', 'S', 'S', 'P', 'P', 'P'];
        const labels = ['Io', 'Tu', 'Lui/Lei', 'Noi', 'Voi', 'Loro'];
        let newConjugation = [];

        try {
            let word = ""
            for (let i = 0; i < persons.length; i++) {
                // Get conjugated verb
                word = italianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', persons[i], numbers[i])
                newConjugation.push({
                    label: labels[i],
                    form: word.charAt(0).toUpperCase() + word.substring(1) // Capitalize conjugated verb
                });
            }
            setError(null);
            setConjugation(newConjugation);
        } catch (err) {
            setError(err);
        }
    }, [verb]);

    /**
     * Function to update the verb state.
     * It first checks if the input verb is valid before updating the state.
     */
    const updateVerb = async () => {
        try {
            italianVerbs.getConjugation(ItalianVerbsList, input.toLowerCase(), 'PRESENTE', '1', 'S');
            setError(null);
            setVerb(input.toLowerCase());
            reset();
        } catch (err) {
            try {
                let res = await translate(`to ${input.toLowerCase()}`, "it")
                try {
                    italianVerbs.getConjugation(ItalianVerbsList, res, 'PRESENTE', '1', 'S');
                    setError(null);
                    setVerb(res);
                    reset();
                } catch (err) {
                    setError(err);
                }
            } catch (err) {
                setError(err);
            };
        }
    }

    // Render the Conjugator component
    return (
        <div className="d-flex flex-column gap-4 p-3">
            <ConjugationForm input={input} setInput={setInput} updateVerb={updateVerb} error={error} />
            <ReactCardFlip className="d-flex" flipDirection="horizontal" isFlipped={isFlipped}>
                <ConjugationTableForm verb={verb} conjugation={conjugation} handleFlip={handleFlip} inputsRef={inputsRef} />
                <ConjugationTable verb={verb} conjugation={conjugation} handleFlip={handleFlip} />
            </ReactCardFlip>
        </div>
    );
}

// Export the Conjugator component
export default Conjugator;
