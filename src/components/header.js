import header from '../img/head.png'
import logo from '../img/logo-blanc.png'
import "../styles/header.css"

function Header() {
  return (
    <div className="header">
      <img className="image-header" src={header}></img>
      <div className="overlay">
        <div className="top-header">
          <img src={logo} alt="logo-blanc"></img>
          <nav>
            <ul>
              <li>
                <a href="#">Concept</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <button>J'organise un repas</button>
          </nav>
        </div>
        <div className="bottom-header">
          <h1>Traiteur à domicile</h1>
          <p>
            Organisez des repas entre amis ou famille, sans vous préocupper de
            quelconque préparatif !
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header