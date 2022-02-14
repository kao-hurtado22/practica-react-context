import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../store/appContext';

const Navbar = () => {
    return (
        <GlobalContext.Consumer>
            {({ store, actions }) => {
                return (
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            {store.currentUser.name} {store.currentUser.lastname}
                            <button onClick={actions.saludo}>Aqui</button>
                        </li>
                    </ul>
                )
            }}
        </GlobalContext.Consumer>
    )
}

export default withRouter(Navbar);