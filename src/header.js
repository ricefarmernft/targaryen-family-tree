import img from "./images/twitter-logo.png"
import img1 from "./images/targaryen-sigil.png"
import img2 from "./images/github-logo.png"

export default function Header() {

    return (<>
    <div className="header">
    </div>
    <div className="header title">
        <h1>Targaryen Family Tree</h1>
        <p>From Aegon I to the Dance of the Dragons</p>
    </div>
    <div className="header logos">
    <a rel="noreferrer" target="_blank" href="https://awoiaf.westeros.org/index.php/House_Targaryen"
        ><img className="tlogo" src={img1} alt=""
      /></a>
    <a rel="noreferrer" target="_blank" href="https://twitter.com/RiceFarmerNFT"
        ><img className="tlogo" src={img} alt=""
      /></a>
    <a rel="noreferrer" target="_blank" href="https://github.com/ricefarmernft"
        ><img className="tlogo" src={img2} alt=""
      /></a>
    </div>
    </>)
}