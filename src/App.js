import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-titulo'>
        <h1>Mis Tareas - App</h1>
      </div>
      <div className='tareas-lista-principal'>
        <h2>Lista de Tareas</h2>
        <ListaDeTareas/>        
      </div>
    </div>
  );
}

export default App;
