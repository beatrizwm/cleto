import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Layout({title, children}) {
    const router = useRouter()
    const route = router.route
    console.log(route)

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Works Midia"/>

                {/** Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Epilogue&family=Lora&family=Shadows+Into+Light&display=swap" rel="stylesheet" />

                {/** Google */}
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>

                {/** Social */}
                <meta property="og:title" content=""/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content=""/>
            </Head>
            <header>
                <div className="top container">
                    <div className="social flex">
                        <FaFacebookF className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaLinkedinIn className="icon"/>
                    </div>
                    <Link href="/">
                        <a className="logo">
                            <img src="/images/wunjo.jpg" alt=""/>
                        </a>
                    </Link>
                    <div className="contact flex">
                        <Link href="">
                            <a><FaWhatsapp className="icon"/></a>
                        </Link>
                        <Link href="mailto:contato@wunjo.com.br">
                            <a><FaEnvelope className="icon"/></a>
                        </Link>
                    </div>
                </div>
                <nav className="top-menu">
                    <Link href="/">
                        <a className={route == "/" ? 'active' : ''}>Home</a>
                    </Link>
                    <Link href="sobre">
                        <a className={route == "/sobre" ? 'active' : ''}>Sobre</a>
                    </Link>
                    <Link href="servicos">
                        <a className={route == "/servicos" ? 'active' : ''}>Serviços</a>
                    </Link>
                    <Link href="blog">
                        <a className={route == "/blog" ? 'active' : ''}>Blog</a>
                    </Link>
                    <Link href="contato">
                        <a className={route == "/contato" ? 'active' : ''}>Contato</a>
                    </Link>
                </nav>
            </header>
            {children}
            <footer>
                <div className="container">
                    <div className="flex">
                        <div className="social">
                            <FaFacebookF className="icon"/>
                            <FaInstagram className="icon"/>
                            <FaLinkedinIn className="icon"/>
                        </div>
                        <div className="copy">
                            Desenvolvido por 
                            <Link href="https://www.worksmidia.com.br">
                                <a>Works Midia</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}




