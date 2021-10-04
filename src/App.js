import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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
      <div className="card" >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
