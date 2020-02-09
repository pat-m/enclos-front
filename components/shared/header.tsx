import {Component, default as React} from "react";
import Link from "next/link";


export default class Header extends Component {

    render() {
        return (
            <header className="mre-header">
                <nav className="mre-header-nav">
                    <a href="#">Enclos</a>
                    <button type="button" data-toggle="collapse" data-target="#mre-main-nav" aria-controls="mre-main-nav" aria-expanded="false" aria-label="main navigation">
                        Menu
                    </button>
                    <div className="mre-header-nav-collapse" id="mre-main-nav">
                        <ul>
                            <li>
                                <Link href={{ pathname: '/'}}>
                                    <a>Accueil <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ pathname: '/restaurant'}} as="restaurant">
                                    <a>Restaurant</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ pathname: '/motel'}} as="motel">
                                    <a>Motel</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ pathname: '/seminary'}} as="seminaires">
                                    <a>Seminaires</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={{ pathname: '/about'}} as="contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
