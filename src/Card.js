function Card(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.sname}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link}>
              <button>{props.btn}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;