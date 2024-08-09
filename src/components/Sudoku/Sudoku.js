function Sudoku() {
    // Define the API endpoint
    const apiUrl = 'https://sudoku-api.vercel.app/api/dosuku'

    // Function to fetch a Sudoku puzzle
    async function fetchSudoku() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const key = data.newboard.grids[0].value
            for (let i = 0; i < 9; i++) {
                if (i % 3 === 0 && i !== 0) {
                    console.log('#'.repeat(21)); // Print a row of '#'
                }
                let row = '';
                for (let j = 0; j < 9; j++) {
                    row += key[i][j];
                    if ((j + 1) % 3 === 0 && j !== 8) {
                        row += ' / ';
                    } else if (j !== 8) {
                        row += ' ';
                    }
                }
                console.log(row);
            }
            // for (let row = 0; row < 9; row++) {
            //     for (let col = 0; col < 9; col++) {
            //       console.log(key[row][col]);
            //     }
            //   }
            return data;
            // You can now use the data to display the Sudoku puzzle on your website
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Call the function to fetch the Sudoku puzzle
    const key = fetchSudoku();




    return (
        <>
            <div>
                {/* {fetchSudoku} */}
            </div>
        </>
    )
}

export default Board;