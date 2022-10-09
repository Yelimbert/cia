import './App.css';
import LoginScreen from './screens/login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './screens/welcome';
import UserLoggedPage from './screens/loggedPage';
import PublicacionCalificacion from './screens/publicacion';

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
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
