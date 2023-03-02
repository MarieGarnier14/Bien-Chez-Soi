import "../styles/presentation.css"

function Presentation() {
  return (
    <div>
      <div className="presentation">
        <div className="top-presentation">
            <img src={require("../img/eggtoast.png")} alt="eggtoast"></img>
            {/* <div className="overlay1"> */}
              <img src={require("../img/photo1.png")} alt="photo1" className="photo1"></img>
              <img src={require("../img/photo2.png")} alt="photo2" className="photo2"></img>
              
            {/* </div> */}
        </div>
        <div className="bottom-presentation">
            <h2>Qui sommes nous ?</h2>
            <p>Bien Chez Soi est né de l’amour pour la bonne bouffe. Julien et Jérôme sont 2 amis de longue date qui ont suivi leur passion en se formant dans la cuisine et la pâtisserie de chef. </p>
            <p>Ils terminent leur formation et travaillent auprès de grands chefs avant de proposer leur propre service de traiteur abordable et familial.</p>
        </div>
      </div>
      <div className="div-button-concept">
        <button>J'organise un repas</button>
      </div>
    </div>
  )
}

export default Presentation