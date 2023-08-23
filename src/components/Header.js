import { Link} from 'react-router-dom/cjs/react-router-dom';

function Header() {

    return (
        <div>
            <h1>FRIENDS DATABASE</h1>
            <Link to="/login">
            <button>LOGIN.</button>
            </Link>
            <Link to="/friends">
            <button>FRIENDLIST.</button>
            </Link>
            <Link to="/friends_add">
            <button>ADDFRIEND.</button>
            </Link>
            <Link to="/logout">
            <button>LOGOUT.</button>
            </Link>
        </div>
    )
}
export default Header;