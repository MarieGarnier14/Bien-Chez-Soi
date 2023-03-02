import "../styles/footer.css"

function Footer() {
  return (
    <div className="footer">
        <div>
            <img src={require("../img/logo-noir.png")} alt="logo-noir"></img>
            <p>Service de traiteur à domicile</p>
        </div>
        <div>
            <ul>
                <li><a href="#">Le concept</a></li>
                <li><a href="#">Qui sommes-nous ?</a></li>
                <li><a href="#">Le blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="reseaux">
            <p>Retrouvez-nous sur les réseaux</p>
            <div className="reseaux-icons">
                <img src={require("../img/facebook.png")} alt="facebook"></img>
                <img src={require("../img/insta.png")} alt="insta"></img>
                <img src={require("../img/pinterest.png")} alt="pinterest"></img>
            </div>
        </div>
    </div>
  )
}

export default Footer