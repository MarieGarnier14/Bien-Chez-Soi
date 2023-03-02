
function InfoBlock({number, description}) {
  return (
    <div style={{
      border: "1px solid white",
      textAlign: "center",
      height: "250px",
      width: "450px",
      padding: "30px",
    }}>
      <div style={{
        fontFamily: "'Bodoni Moda', serif",
        fontSize: "70px",        
      }}>
        {number}
      </div>
      <div style={{
            
      }}>
        {description}
      </div>
    </div>
  )
}

export default InfoBlock