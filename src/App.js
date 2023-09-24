import './App.css';
import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title ='Mini Lotto' maxBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
