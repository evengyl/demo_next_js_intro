import Home from './home/home';
import Script from 'next/script';
import NavBar from '../components/navBar/navBar';

export default function index() {
  return(
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Home />
    </>
  )
}

//comme next démarre d'office sur un fichier nommé index, et que je ne veux pas le surcharger de la "home"
//je crée un compo directement dessus appeler home même si ça revient au même et que ça n'apporte rien sauf des fichiers en plus

