import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ShowPasswordItems from '../ShowPasswordItems'
import './index.css'

class PasswordManager extends Component {
  state = {
    name: '',
    gmail: '',
    password: '',
    passwordList: [],
    isTrue: false,
    SearchInput: '',
  }

  OnSubmitData = event => {
    event.preventDefault()
    const {name, gmail, password} = this.state

    const newPasswordDetails = {
      id: uuidv4(),
      name,
      gmail,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordDetails],
      name: '',
      gmail: '',
      password: '',
    }))
  }

  OnSearchResults = event => {
    this.setState({SearchInput: event.target.value})
  }

  OnDeleteItem = id => {
    const {passwordList} = this.state
    const filteredResults = passwordList.filter(eachItem => eachItem.id !== id)

    this.setState({passwordList: filteredResults})
  }

  OnSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  OnNameInput = event => {
    this.setState({name: event.target.value})
  }

  OnGmailInput = event => {
    this.setState({gmail: event.target.value})
  }

  OnPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  OnCheckBoxHandler = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  render() {
    const {
      name,
      gmail,
      password,
      passwordList,
      SearchInput,
      isTrue,
    } = this.state

    const SearchResults = passwordList.filter(eachItem =>
      eachItem.gmail.toLowerCase().includes(SearchInput.toLowerCase()),
    )

    return (
      <div className="App-Container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="password-section">
          <div className="password-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.OnSubmitData}>
              <div className="website-container">
                <img
                  className="website-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                />
                <input
                  onChange={this.OnGmailInput}
                  className="website-type"
                  type="text"
                  placeholder="Enter Website"
                  value={gmail}
                />
              </div>
              <div className="website-container">
                <img
                  className="website-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  onChange={this.OnNameInput}
                  className="website-type"
                  type="text"
                  placeholder="Enter Username"
                  value={name}
                />
              </div>
              <div className="website-container">
                <img
                  className="website-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  onChange={this.OnPasswordInput}
                  className="website-type"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="password-image-container">
            <img
              className="password-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>

        {/*  passwords show container */}

        <div className="passwords-show-container">
          <div className="search-container">
            <h1 className="password-length">
              Your Passwords <p>{passwordList.length}</p>
            </h1>
            <div className="website-container input-search-container">
              <img
                className="website-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                onChange={this.OnSearchInput}
                value={SearchInput}
                className="website-type search-type"
                type="search"
                placeholder="search"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="checkbox-container">
            <input
              id="show-checkbox"
              type="checkbox"
              onClick={this.OnCheckBoxHandler}
            />
            <label htmlFor="show-checkbox">Show Passwords</label>
          </div>
          {SearchResults.length > 0 ? (
            <ul className="display-list-Items">
              {SearchResults.map(eachItem => (
                <ShowPasswordItems
                  PasswordDetails={eachItem}
                  IsTrue={isTrue}
                  OnDelete={this.OnDeleteItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          ) : (
            <div className="No-Password-Container">
              <img
                className="no-passwords-image"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-password-description">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
