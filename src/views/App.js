import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import ListUser from './Users/ListUser';
import MyComponent from './example/MyComponent';
import Home from './example/Home'; 
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
/**
 * 2 components: class component / function component {function, arrow}
 *  
 * @returns  {JSX.Element}
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ListTodo /> */}
          <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route> 
          <Route path="/user/:id">
            <DetailUser />
          </Route> 
        </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

        
      </div>
    </Router>

  );
}

export default App;
