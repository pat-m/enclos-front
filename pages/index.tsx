import React, {Component} from 'react'
import {NextPageContext} from "next";
import Availabilities from "../components/partials/availabilities";



export default class Index extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Accueil';
        return { title }
    }

    render() {
        return (
            <>
                <Availabilities/>
            </>
        )

    }
}
