import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowOutward from '@mui/icons-material/ArrowOutward';

function ConjugationForm({ input, setInput, updateVerb }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TextField
                label="Enter Verb"
                variant="outlined"
                value={input}
                onChange={e => setInput(e.target.value)}
                fullWidth
            />
            <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowOutward />}
                onClick={updateVerb}
                // style={{ height: '70%' }}
            >
                Update Verb
            </Button>
        </div>
    );
}

export default ConjugationForm;
