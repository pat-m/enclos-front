import React, {Component} from 'react'
import {NextPageContext} from "next";
import ContactForm from "../components/forms/contact.form";

export default class Contact extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Contact';
        return { title }
    }

    render() {
        return (
            <>
                <h1>Contact</h1>
                <ContactForm/>
            </>
        )
    }
}
