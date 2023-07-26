import './index.css'

const ShowPasswordItems = props => {
  const {PasswordDetails, IsTrue, OnDelete} = props
  const {name, gmail, password, id} = PasswordDetails
  const initial = name ? name[0] : name

  const onDeleteItem = () => {
    OnDelete(id)
  }

  const backgroundColors = [
    '#b91c1c',
    '#14b8a6',
    '#f97316',
    '#10b981',
    '#f59e0b',
    '#0ea5e9',
  ]

  const RandomColor = Math.floor(Math.random() * backgroundColors.length)
  const randomcolor = backgroundColors[RandomColor]

  return (
    <li className="password-list-items">
      <div className="Content-Container">
        <p style={{backgroundColor: randomcolor}} className="initial-name">
          {initial}
        </p>

        <div>
          <p>{gmail}</p>
          <p>{name}</p>
          {IsTrue ? (
            <p>{password}</p>
          ) : (
            <img
              className="stars-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteItem}
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ShowPasswordItems
