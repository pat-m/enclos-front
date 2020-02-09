import {Component} from "react";
import * as React from "react";

export default class ContactForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Email:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Objet:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea/>
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        );
    }
}
