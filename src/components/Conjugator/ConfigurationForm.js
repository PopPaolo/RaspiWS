import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowOutward from '@mui/icons-material/ArrowOutward';

function ConjugationForm({ input, setInput, updateVerb, error }) {
    return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px'}}>
            <TextField
                label="Enter Verb"
                variant="filled"
                value={input}
                onChange={e => setInput(e.target.value)}
                InputProps={{
                    style: { color: '#dddddd' }, // Set text color to white
                }}
                InputLabelProps={{
                    style: {
                        color: error ? 'red' : '#ffffff', // Set label text color to red in error mode
                    },
                }}
                error={Boolean(error)} // Show error state
                helperText={error} // Display error message
            />
            <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowOutward />}
                onClick={updateVerb}
                style={{ color: '#ffffff' }} // Set button text color to white
            >Go</Button>
        </div>
    );
}

export default ConjugationForm;
