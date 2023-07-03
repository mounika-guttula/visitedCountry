import './index.css'

const Country = props => {
  const {eachCountry, onClickVisit} = props
  const {name, id, isVisited} = eachCountry
  const onClickButton = () => {
    onClickVisit(id)
  }

  return (
    <div className="countries-cont">
      <li className="countries-bg-cont">
        <p className="heading">{name}</p>
        {isVisited ? (
          <p className="para">Visited</p>
        ) : (
          <button type="button" className="button" onClick={onClickButton}>
            Visit
          </button>
        )}
      </li>
      <hr />
    </div>
  )
}

export default Country
