import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheet/InputData.css'

class InputData extends Component {
  constructor() {
    super()
    this.inputData = `{
      push: [1,5,3,4]
}`
}

  componentWillReceiveProps(nextProps) {
    if(nextProps.submit) {
      this.props.getData(this.txtarea.value)
    }
    if (nextProps.sampleData !== ``) {
      this.txtarea.value = nextProps.sampleData;
    }
  }
  render() {
    return (
      <textarea ref={input=>this.txtarea=input} className='input-data' wrap='off' spellCheck='false' defaultValue={this.inputData}>
      </textarea>
    )
  }
}

InputData.propTypes = {
  getData: PropTypes.func
}

InputData.defaultProps ={
  getData: f=>f
}

export default InputData