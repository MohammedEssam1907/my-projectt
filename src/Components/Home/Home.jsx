import React, { useContext } from 'react'
import Card from '../../UI/Card/Card'
import Classes from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../Store/AuthContext';

export default function Home(props) {
    const authCtx = useContext(AuthContext);

    return <>
        <Card className={Classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
    </>
}
