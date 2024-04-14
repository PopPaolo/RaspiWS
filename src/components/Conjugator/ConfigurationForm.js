import React from 'react';
import { TextField, Button, styled } from '@mui/material';
import ArrowOutward from '@mui/icons-material/ArrowOutward';

const StyledTextField = styled(({ labelColor, ...other }) => (
    <TextField
      {...other}
      InputLabelProps={{
        style: { color: labelColor },
      }}
    />
  ))({
    // '& label.Mui-focused': {
    //   color: '#ffffff', // Set label text color to white when focused
    // },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#bbb', // Set underline color to white when focused
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#bbb', // Set border color to white
      },
      '&:hover fieldset': {
        borderColor: '#fff', // Set border color to white when hovered
      },
      '&.Mui-focused fieldset': {
        borderColor: '#bbb', // Keep border color white when focused
      },
      '&.Mui-focused:hover fieldset': {
        borderColor: '#fff', // Keep border color white when focused and hovered
      },
    },
    '& .MuiInputBase-input': {
      color: '#bbb', // Set input text color to white
    },
  });
  


function ConjugationForm({ input, setInput, updateVerb, error }) {
    return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <StyledTextField
                label="Enter Verb"
                labelColor="#ddd"
                variant="outlined"
                value={input}
                onChange={e => setInput(e.target.value)}
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
