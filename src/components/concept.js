import InfoBlock from "./InfoBlock"
import "../styles/concept.css"

function Concept() {
    const description1 = "Vous réservez votre date d’événement en indiquent le type de cuisine désirée."
    const description2 = "Le jour J, votre traiteur se présente au lieu désiré et cuisine sous vos yeux."
    const description3 = "Vous profitez d’un succulent repas en présence de vos proches."
    return (
        <div style={{
            backgroundColor: "#212121",
            color: "white",
        }} className="concept">
            <div className="top-concept">
                <img src={require("../img/serpentin1.png")} alt="serpentin1"></img>
                <div>
                    <div className="concept-top-div">
                        <h2>Le concept <span  className="bien-chez-soi">bien chez sois</span></h2>
                        <p>Profitez d’un traiteur à domicile offrant un large choix de cuisines.</p>
                    </div>
                    <p>Vous recevez des amis ou de la famille mais ne vous préoccupez pas des courses, de la préparation ou du rangement. Profitez simplement de votre moment entre amis ou en famille.</p>
                    <h2 className="comment-ca-marche">Comment ça marche ?</h2>
                </div>
                <img src={require("../img/serpentin2.png")} alt="serpentin2"></img>

            </div>
            <div className="info-block">
                <InfoBlock number="1" description={description1} ></InfoBlock>
                <InfoBlock number="2" description={description2} ></InfoBlock>
                <InfoBlock number="3" description={description3} ></InfoBlock>
            </div>
        </div>
    )
}

export default Concept