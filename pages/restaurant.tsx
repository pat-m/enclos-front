import React, {Component} from 'react'
import {NextPageContext} from "next";

export default class Restaurant extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Restaurant';
        return { title }
    }

    render() {
        return (
            <h1>Contact</h1>
        )
    }
}
