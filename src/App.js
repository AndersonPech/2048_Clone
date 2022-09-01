import styles from './styles/style.module.scss';
import PageBody from './components/PageBody';
import Grid from './Grid';

function App() {
  let grid = new Grid(16);
  document.addEventListener('keydown', function(shiftDown) {
    console.log('down')
  })
  return (
    <PageBody>
      <p className={styles.p1}>  
        2048 Clone
      </p>
      <button onClick={grid.startGame()}>Reset</button>
      {grid.getGrid()}
    </PageBody>
  );
}

export default App;
