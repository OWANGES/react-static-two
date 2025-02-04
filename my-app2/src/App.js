import './App.css';
import MyContent from './componets/Content';
import MyHeader from './componets/Header';
import MyFooter from './componets/Footer';

function App(myContent) {
  return (
    <div className="App">
      <header>
        <MyHeader />
      </header>
      <MyContent />
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
