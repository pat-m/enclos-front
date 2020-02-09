import React, {Component} from 'react'
import {NextPageContext} from "next";

export default class Contact extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent }
    }

    render() {
        return (
            <h1>Contact</h1>
        )
    }
}
