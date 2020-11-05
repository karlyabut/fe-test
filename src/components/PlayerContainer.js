import './PlayerContainer.css'

function PlayerContainer(props) {
  return(
    <div className="p-container">
      <div className="p-info">
        <div className="p-image">
          <img className="p-headshot" src={props.imageSrc} alt="hi" />
        </div>
        <div className="p-name">{props.playerName}</div>
        <div className="p-points">
          <div className="p-inner-txt">{props.playerPoints}</div>
        </div>
        <div>PTS</div>
      </div>
    </div>
  )
}

export default PlayerContainer;