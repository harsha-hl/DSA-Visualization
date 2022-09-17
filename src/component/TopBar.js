import React from 'react'
import PropTypes from 'prop-types'
import GithubPage from './GithubPage'
import DocPage from './DocPage'
import OperationState from './OperationState'
import '../stylesheet/TopBar.css'

const TopBar = ({github='', docLink='', operationCount}) =>
  <div className='top-bar'>
    <p className='heading'>Data Structures</p>
    <p className='quote'>"Not all roots are buried down in the ground, some are at the top of a tree."</p>
  </div>

TopBar.propTypes = {
  github: PropTypes.string,
  docLink: PropTypes.string,
  operationCount: PropTypes.object
}

export default TopBar
