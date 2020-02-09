import React, {Component} from 'react'
import {NextPageContext} from "next";

export default class Seminary extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Seminaire';
        return { title }
    }

    render() {
        return (
            <h1>Seminaires</h1>
        )
    }
}
