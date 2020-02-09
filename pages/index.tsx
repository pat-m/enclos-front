import React, {Component} from 'react'
import {NextPageContext} from "next";
import AvailabilitiesPartial from "../components/partials/availabilities.partial";




export default class Index extends Component {

    static async getInitialProps({ req }: NextPageContext) {
        const title = 'Accueil';
        return { title }
    }

    render() {
        return (
            <>
                <AvailabilitiesPartial/>
            </>
        )

    }
}
