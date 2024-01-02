import { Inter } from "next/font/google";
import Head from "next/head";

// CSS imports
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/style.css";
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" async></script>;

// Plugins
import "../../public/assets/css/plugins/slick-slider/slick.css";
import "../../public/assets/css/plugins/animate.css";
// import "../../public/assets/css/plugins/jquery-ui.css";
import "../../public/assets/css/plugins/magnific-popup.css";
import "../../public/assets/css/plugins/nice-select.min.css";
import "../../public/assets/css/plugins/progress.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "../../public/assets/img/whatsapp_float_icon.png"; //For Whataspp Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//For Whataspp Icon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';//For Whataspp Icon
import { config } from "@fortawesome/fontawesome-svg-core";
import { GoogleTagManager } from '@next/third-parties/google'

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MetaRizz Technologies | Design, Develop, Market",
  description: "The one stop solution to all your digital problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MetaRizz Technologies | Design, Develop, Market</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="../../public/assets/img/icon/tab-icon.png"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        {/* <!-- Font Awesome Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/font-awesome/css/all.min.css"
        />
        {/* <!-- Bootstrap Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/bootstrap/bootstrap.min.css"
        />
        {/* <!-- Magnific Popup Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/magnific-popup.css"
        />
        {/* <!-- Animate Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/animate.css"
        />
        {/* <!-- Slick-Slide-Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/slick-slider/slick.css"
        />
        {/* <!-- Style Css --> */}
        <link rel="stylesheet" href="../../public/assets/css/style.css" />
        {/* <!-- Responsive Css --> */}
        <link rel="stylesheet" href="../../public/assets/css/responsive.css" />
      </Head>
      <body className={inter.className} data-scroll-animation="false">
        {children}
        {/* WhatsApp Floating Button */}
        <a href="https://wa.me/+918850283085?text=Hey%21+I+have+a+requirement+for+MetaRizz+for+building+a" target="_blank" className="whatsapp_float" title="Chat with us on WhatsApp">
          {/* <img src="../../public/assets/img/whatsapp_float_icon.png" alt="W" /> */}<FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatss_float_img"/>
        </a>
      </body>
      <GoogleTagManager gtmId="GTM-PVX39Z5" />
    </html>
  );
}
