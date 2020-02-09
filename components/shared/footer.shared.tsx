import {Component, default as React} from "react";

export default class FooterShared extends Component {

    render() {
        return (
            <footer className="mre-footer">
                <div className="mre-footer-container">
                    <div className="mre-footer-content">
                        <div className="mre-footer-row">
                            <div className="mre-footer-address">
                                <h4>Nous contacter</h4>
                                <address>
                                    Vous pouvez nous contacter sur la page suivante
                                    <a href="https://www.restaurant-lenclos.com/contact">https://www.restaurant-lenclos.com/contact</a>.<br/>
                                    Si vous souhaitez nous envoyer un email, merci de contacter
                                    <a href="mailto:contact@restaurant-lenclos.com">contact@restaurant-lenclos.com</a>.<br/>
                                    L'adresse du Motel Restaurant l'Enclos est la suivante:<br/>
                                    20 RD813<br/>
                                    31450 Donneville<br/>
                                    France
                                </address>
                            </div>
                            <div className="mre-footer-nav">

                            </div>
                            <div className="mre-footer-social">
                                <h4>Accés</h4>
                                <p>
                                    Accès au Motel Restaurant l’Enclos
                                    Le Motel Restaurant l’enclos est situé à 12 minutes de Toulouse, à Donneville.
                                    Accédez à l’établissement par la D813 depuis Ramonville saint Agne:
                                    Suivre la route D813 direction Carcassonne via Castanet Tolosan, Pompertuzat, Deyme
                                    et Donneville
                                    Le Restaurant se trouve sur votre Gauche. (Parking spacieux disponible).
                                    Accédez depuis Villefranche de Lauragais:
                                    Suivre Villenouvelle, Baziége Donneville se trouve 2 Km après Montgiscard
                                    L’accès est possible par l’autoroute A61, sortie Montgiscard (n°19.1). 6min de
                                    Labége
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
