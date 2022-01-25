import PropTypes from 'prop-types'
import React from 'react'

const logoStyle = {
  maxWidth: '75%',
  marginTop: '12px',
}

const h3Style = {
  marginTop: '-20px',
}

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img
          style={logoStyle}
          src="https://campeonprod.s3.amazonaws.com/Campeon_Gold.png"
        />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Campeon</h1>
        <h3 style={h3Style}>Photography</h3>
        <p>
          Welcome to my portfolio, enjoy the vibes.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
