import React, {Component} from 'react'
import {NextPageContext} from "next";

export default class Motel extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Motel';
        return { title }
    }

    render() {
        return (
            <h1>Motel</h1>
        )
    }
}
