document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const button = document.getElementById('new-grid-button');

    // Function to generate a random color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    // Function to darken a color by 10%
    function darkenColor(color, amount = 10) {
        const rgb = color.match(/\d+/g);
        let r = Math.max(0, parseInt(rgb[0]) - amount * 2.55);
        let g = Math.max(0, parseInt(rgb[1]) - amount * 2.55);
        let b = Math.max(0, parseInt(rgb[2]) - amount * 2.55);
        return `rgb(${r},${g},${b})`;
    }

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
            cell.style.backgroundColor = getRandomColor();
            cell.dataset.lightness = 1; // Initial lightness level

            // Add event listener for mouseenter to change the background color
            cell.addEventListener('mouseenter', () => {
                const currentColor = cell.style.backgroundColor;
                const currentLightness = parseFloat(cell.dataset.lightness);
                if (currentLightness > 0) {
                    const newColor = darkenColor(currentColor, 10);
                    cell.style.backgroundColor = newColor;
                    cell.dataset.lightness = currentLightness - 0.1;
                } else {
                    cell.style.backgroundColor = '#000'; // Ensure it becomes completely black
                }
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
