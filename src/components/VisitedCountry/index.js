import './index.css'

const VisitedCountry = props => {
  const {each, onRemoveBtn} = props
  const {id, name, imageUrl} = each
  const onClickRemove = () => {
    onRemoveBtn(id)
  }

  return (
    <li className="list-visited">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="img-remove-cont">
        <p>{name}</p>
        <button type="button" className="deleteBtn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
