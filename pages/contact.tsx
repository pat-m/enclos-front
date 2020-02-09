import React, {Component} from 'react'
import {NextPageContext} from "next";

export default class Contact extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Contact';
        return { title }
    }

    render() {
        return (
            <h1>Contact</h1>
        )
    }
}
