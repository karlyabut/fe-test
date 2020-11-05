import "../components/Button.css";

function Button(props) {
  return(
    <button className="btn" onClick={props.onClick}>
      <img className="btn-icon-img" src={props.iconImg} alt=""/>
      <strong>{props.btnText}</strong>
    </button>
  )
}

export default Button;