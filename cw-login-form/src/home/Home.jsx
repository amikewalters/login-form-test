import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    return (
        <div>
            <h1>Hi {auth?.firstName} {auth?.lastName}!</h1>
            <p>You're logged in!!</p>
            <p>
                This is some very minimalistic dummy content:
                <br /><strong>Bold</strong>, <em>Italic</em>, <strike>Strikethrough</strike>
            </p>
            <p><Link to="/users">Manage Users</Link></p>
        </div>
    );
}
