import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../stylesheet/SampleCode.css'

class SampleCode extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  settreedata = `{
  keys: [100, 90, 80, 85]
}`
  settreecode = `//Creating set Tree
  let tree = new std.SetTree();

  //pushing elements from input
data.keys.map(n => tree.insert(n));

//pushing manually
tree.insert(100);
tree.insert(120);
`
  
  maptreedata = `{
  keys: [100, 90, 80, 85]
}`
  maptreecode = `//Creating new Map Tree
  let tree = new std.MapTree();

  //inserting key value pair from the input Where value is just a string
data.keys.map(
  n=>tree.insert(n, 'number' + n.toString())
);

//inserting manually
tree.insert(100, 'Hundred');
tree.insert(200,'Two hundred')
`

  listdata = `{
  push: [6, 3, 1, 5]
}`
  listcode = `//creating new doubly linked list
  let li = new std.List();
  
  //Pushing data from the end using input
  data.push.map(d => li.pushBack(d));
  li.pushBack(12); // using hardcoded value
  
  //Removing element from the start
  li.popFront();
  li.popFront();
  li.popFront();
  li.popFront();
  
  //Adding element from the start using input
  data.push.map(n => li.pushFront(n));
  li.pushFront(10);//hardcoded value
  
  
  //Removing element from the end
  li.popBack();
  li.popBack();
  li.popBack();
  li.popBack();`
  
  queuedata = `{
  base: [1,2,3,4],
  push: [5,6]
}`
  queuecode = `//creating a queue with initial values 
  let qu = new std.Queue(data.base);
  
  
  //Popping elements from the queue
  qu.pop();
  qu.pop();
  qu.pop();
  qu.pop();
  
  //pushing data from the input
  data.push.map(d => qu.push(d));
  
  //pushing data manually 
  qu.push(10);
  qu.push(12);`
  
  pqdata = `{
    push: [1,5,3,4,7]
}`
  pqcode = `//Creating a priority Queue
  let pq = new std.PriorityQueue();
  
  //pushing data from input
  data.push.map(d => pq.push(d));
  
  //manually pushing data
   pq.push(8);
  pq.push(12);
  
  //Popping elements from the Priority Queue
  pq.pop();
  pq.pop();
  pq.pop();
  pq.pop();
`
  stackcode = `//Creating the Stack 
  let st = new std.Stack();

  //pushing data to stack from input
  data.push.map(d => st.push(d));
  st.push(12);
  st.push(13);//hardcoded data

  //popping elements
  st.pop();
  st.pop();
  st.pop();
  st.pop();`

  stackdata =`{
    push: [1,5,3,4]
  }`

  closeButton = () => {
    this.setState({open: !this.state.open})
  }
  clickButton = (code, data) => {
    this.props.changeSample(code, data);
    this.closeButton();
  }

  render() {
    return (
      <div className='samplecode'>
        <button className='samplecodebutton' onClick={this.closeButton}>Examples</button>
        {(this.state.open)?
          <div className='coverDom2'>
            <div className='changecodecontent'>
              <button className='gosample' onClick={() => this.clickButton(this.settreecode, this.settreedata)}>SetTree Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.maptreecode, this.maptreedata)}>MapTree Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.stackcode, this.stackdata)}>Stack Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.listcode, this.listdata)}>List Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.queuecode, this.queuedata)}>Queue Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.pqcode, this.pqdata)}>Priority Queue Example</button>
              <button className='closeshowdata' onClick={this.closeButton}>close</button>
            </div>
          </div>
        : null}
      </div>
    )
  }
}

SampleCode.propTypes = {
  changeSample : PropTypes.func
}

SampleCode.defaultProps = {
  changeSample: f=>f
}

export default SampleCode;