document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const button = document.getElementById('new-grid-button');

    // Function to create the grid
    function createGrid(size) {
        // Clear existing grid
        container.innerHTML = '';

        // Set the container dimensions
        container.style.width = '960px';
        container.style.height = '960px';

        // Calculate the size of each cell
        const cellSize = 960 / size;

        // Create the new grid
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;

            // Add event listener for mouseenter to change the background color
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = '#000'; // Change color to black
            });

            container.appendChild(cell);
        }
    }

    // Function to handle new grid creation
    function newGrid() {
        let size = prompt("Enter the number of squares per side for the new grid (max 500):");

        // Convert the input to a number and validate it
        size = parseInt(size);
        if (isNaN(size) || size < 1 || size > 500) {
            alert("Please enter a valid number between 1 and 500.");
            return;
        }

        createGrid(size);
    }

    // Add event listener to the button
    button.addEventListener('click', newGrid);

    // Create initial 16x16 grid
    createGrid(16);
});
