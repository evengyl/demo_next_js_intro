import '../styles/globals.css'
import NavBar from '../components/navBar/navBar'

export default function App({ Component, pageProps }) {
    return(
        <>
            <NavBar/>
            <Component {...pageProps} />
        </>
    )
}

//_app est un compo automatique qui emglobe toute l'app facon react,
//c'est donc utiles pour importer les css gloabaux !