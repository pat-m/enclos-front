import {Component, default as React} from "react";

export default class SeminaryForm extends Component {
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
