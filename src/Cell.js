import styles from "./styles/grid.module.scss";

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.active = false;
        this.num = 0;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getCell() {
        let styleNum = styles.gridItem;
        switch(this.num) {
            case(2) : 
                styleNum = styles.grid2Item;
                break;
            case(4) :
                styleNum = styles.grid4Item;
                break;
            default :
                styleNum = styles.gridItem;
        }
        return (this.active) ? <div className={styleNum}><div>{this.num}</div></div> : <div className={styleNum} />;
    }

    spawnNumber() {
        let x = Math.floor(Math.random() * 10);
        let num = (x < 8) ? 2 : 4;
        this.active = true;
        this.num = num;
    }
}

export default Cell;