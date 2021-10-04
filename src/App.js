import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './componets/Card';

function App() {
  return (
    <div className="App">
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <span className="fondonegro">Hola Mundo</span>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-success"
      >Success
      </button>
      <Card /> 
      </div>
      
  );
}

export default App;
