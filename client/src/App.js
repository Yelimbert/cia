import './App.css';
import LoginScreen from './screens/login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './screens/welcome';
import UserLoggedPage from './screens/loggedPage';
import PublicacionCalificacion from './screens/publicacion';
import Dashboard from './screens/dashboard';
import SeleccionAsignatura from './screens/seleccion';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='logged' element={<UserLoggedPage/>}></Route>
          <Route path='login' element={<LoginScreen/>}></Route>
          <Route path='publicacion' element={<PublicacionCalificacion asignatura="Aseguramiento de la calidad del software" 
          id="1099454" estudiante="Yelimbert Javier" calificacion="99" opcion="Publicar"/>}></Route>
          <Route path='/dashboard/:id' element={<Dashboard/>}></Route>
          <Route path='seleccion' element={<SeleccionAsignatura/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
