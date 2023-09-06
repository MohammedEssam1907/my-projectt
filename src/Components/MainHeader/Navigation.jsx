import React, { useContext } from 'react'
import Classes from './Navigation.module.css'
import AuthContext from '../Store/AuthContext';

export default function Navigation() {
    const ctx = useContext(AuthContext);

return <>
    <nav className={Classes.nav}>
        <ul>
            {ctx.isLoggedIn && (
            <li>
                <a href="/">Users</a>
            </li>
            )}
            {ctx.isLoggedIn && (
            <li>
                <a href="/">Admin</a>
            </li>
            )}
            {ctx.isLoggedIn && (
            <li>
                <button onClick={ctx.onLogout}>Logout</button>
            </li>
            )}
        </ul>
    </nav>
</>
}
