import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import DetailsService from './Pages/DetailsService/DetailsService';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import MeetDoctor from './Pages/MeetDoctor/MeetDoctor';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route exact path="/home">
          <Home></Home>
         </Route>
         <PrivateRoute path="/meetdoctor">
           <MeetDoctor></MeetDoctor>
         </PrivateRoute>
         <PrivateRoute path="/appoinment">
           <Appoinment></Appoinment>
         </PrivateRoute>
         <Route path="/about">
           <About></About>
         </Route>
         <PrivateRoute exact path="/services/:servicesId">
          <DetailsService></DetailsService>
         </PrivateRoute>
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
     </AuthProvider>
    </div>
  );
}

export default App;
