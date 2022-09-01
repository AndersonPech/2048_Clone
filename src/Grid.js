import Cell from "./Cell";
import styles from "./styles/grid.module.scss";

class Grid {
    constructor(cells) {
        console.log(cells)
        this.cellsNum = cells;
        this.cellGrid = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
        let gridItems = []
        for (let i = 0; i < 16; ++i) {
            let cell = new Cell();
            gridItems.push(cell)
        }
        let grid2DList = [];
        while(gridItems.length) grid2DList.push(gridItems.splice(0,4))
        this.grid = grid2DList;
    }

    getGrid() {
        let gridSheet = []
        for (let i = 0; i < 4; ++i) {
            for (let j = 0; j < 4; ++j) {
               gridSheet.push(this.grid[i][j].getCell()) 
            }
        }
        return <div className={styles.grid}>{gridSheet}</div>;
    }

    startGame() {
        let x = Math.floor(Math.random() * 4);
        let y = Math.floor(Math.random() * 4);

        let a = Math.floor(Math.random() * 4);
        let b = Math.floor(Math.random() * 4);

        while(a === x && b === y) {
            a = Math.floor(Math.random() * 4);
            b = Math.floor(Math.random() * 4); 
        }
        this.grid[x][y].spawnNumber();
        this.grid[a][b].spawnNumber();
    }

    shiftDown() {
        for (let i = 0; i < 4; ++i) {
            for (let j = 0; j < 4; ++j) {

            }
        }
    }

    shiftUp() {

    }

    shiftLeft() {

    }

    shiftRight() {

    }
}

export default Grid;