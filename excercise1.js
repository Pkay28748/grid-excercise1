document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");

    function createGrid(size) {
        container.innerHTML = ''; // Clear previous grid

        let totalSquares = size * size; 
        let squareSize = 960 / size; 

        for (let i = 0; i < totalSquares; i++) {
            let square = document.createElement("div"); 
            square.classList.add("square"); 
            square.style.width = `${squareSize}px`; 
            square.style.height = `${squareSize}px`; 
            
            // Add hover effect to change color
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = "black";
            });

            container.appendChild(square); 
        }
    }

    // Default grid (16x16)
    createGrid(4);

    document.getElementById("resize").addEventListener("click", function() {
        let newSize = prompt("Enter new grid size (max 100):");

        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize); // Create new grid
        } else {
            alert("Invalid size! Please enter a number between 1 and 100.");
        }
    });
});
