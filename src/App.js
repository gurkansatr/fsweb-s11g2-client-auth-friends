import './App.css';
import { Route, Switch} from 'react-router-dom/cjs/react-router-dom';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';
import AuthContextProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/login" component={Login}/>
        <ProtectedRoute path= "/friends">
        <FriendsList/>
        </ProtectedRoute>
        <ProtectedRoute path= "/friends_add">
        <AddFriend/>
        </ProtectedRoute>
        <ProtectedRoute path= "/logout">
        <Logout/>
        </ProtectedRoute>
      </Switch>
    </div>
    </AuthContextProvider>
  );
}

export default App;
