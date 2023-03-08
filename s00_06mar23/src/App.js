// Importaciones de recursos externos

// Importaciones de recursos internos
import Card from './components/Card';

// Importar assets, estilos, etc.
import logo from './logo.svg';
//import './App.css';

//hola

function App() {

  const tittle = "Sesiòn 00 Mi primer React";
  const imgPet = "https://picsum.photos/id/237/200/300";
  const pharagraph = "Lorem ipsum dolor sit amet co nsectetur adipisicing elit. Quisquam, quod.";
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{tittle}</h1>
        <img src={imgPet} className="Puppy-Pet" alt="puppy pet" />
        <p>{pharagraph}</p>
      </header>

      {
      // Componente con etiqueta autocierre
    }
      <Card/>

      {
      // Componente con etiqueta de apertura y cierre
    }
      <Card></Card>

      {
        /*
              <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        */
      }
    </div>
  );
}

export default App;
