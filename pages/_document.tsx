import Document, {Head, Html, Main, NextScript} from 'next/document'
import Header from "../components/shared/header";
import React from "react";
import Footer from "../components/shared/footer";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    // render() {
    //     return (
    //         <Html>
    //
    //         </Html>
    //     )
    // }
}
