const flexContainer = document.querySelector(".flexContainer");
const gridBtn = document.querySelector(".gridBtn");
const body = document.querySelector('body');

gridBtn.addEventListener('click', ()=>{
    const gridSize = parseInt(prompt("Enter the grid size:"));

    for (let i = 0; i < gridSize; i++) {
        const flexRows = document.createElement('div');
        flexRows.classList.add('flex-rows');

        for (let j = 0; j < gridSize; j++) {
            const flexColumns = document.createElement('div');
            flexColumns.classList.add('flex-columns');
            flexRows.appendChild(flexColumns);
        }
        flexContainer.appendChild(flexRows);
    }
    
    if(gridSize!=0 && gridSize>0){    
        const clearBtn = document.createElement('button');
        clearBtn.classList.add('clearBtn');
        clearBtn.textContent = "Let's delete the boxes together, man!";

        let isCompleted = false;

        clearBtn.addEventListener('click', ()=>{
            if (!isCompleted) {
                gridBtn.remove();
                flexContainer.remove();
                isCompleted = true;
                clearBtn.textContent = "Let's do it again!!";
            } else {
                location.reload();
            }
        }
                                 );
    body.appendChild(clearBtn);
    }


const gridCells = document.querySelectorAll('.flex-columns');
gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseenter', ()=>
        {
            const randomColour = randomColor();
            gridCell.style.backgroundColor = randomColour;
        });
    gridCell.addEventListener('mouseleave', () => {
    gridCell.style.backgroundColor = 'lightblue';
    });
});
    });


function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 16);
        // Corrected line
        const randomChar = letters[randomNumber];
        color += randomChar;
    }
    return '#' + color;
}