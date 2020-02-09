import App, {Container} from 'next/app'
import React from 'react'
import '../assets/main.scss'
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Head from "next/head";

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
                <Header/>
                <Component {...pageProps}/>
                <Footer/>
            </>
        )
    }
}
