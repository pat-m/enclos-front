import App, {Container} from 'next/app'
import React from 'react'
import '../assets/main.scss'

import Head from "next/head";
import HeaderShared from '../components/shared/header.shared';
import FooterShared from '../components/shared/footer.shared';

interface Props {
    pageProps?: string
}

export default class MyApp extends App<Props> {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};
        const locale = 'fr';

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps, locale}
    }

    render () {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <title>{pageProps.title}</title>
                </Head>
                <HeaderShared/>
                <Component {...pageProps}/>
                <FooterShared/>
            </>
        )
    }
}
