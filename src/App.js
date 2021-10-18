import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MeetDoctor from './Pages/MeetDoctor/MeetDoctor';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route exact path="/home">
          <Home></Home>
         </Route>
         <Route path="/meetdoctor">
           <MeetDoctor></MeetDoctor>
         </Route>
         <Route path="/appoinment">
           <Appoinment></Appoinment>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route path="*">
         <NotFound></NotFound>
         </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
