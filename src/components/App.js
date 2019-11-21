import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigContainer from './PigContainer.js'
import hogs from '../porkers_data';

class App extends Component {

  constructor(){
    super()
    this.state={
      pigInfo: [...hogs]
    }
  }

  handleReset = () => {
    this.setState({
      pigInfo: [...hogs]
    })
  }

  handleSortGreased = () => {
    console.log("Greasing")
    let greasyPigs = this.state.pigInfo.filter((pig) => {
      return pig.greased
    })
    this.setState({
      pigInfo: [...greasyPigs]
    })
  }

  handleSortName = () => {
    console.log("Sorting Name")
    let sort = this.state.pigInfo.sort((first,last) => first.name > last.name? 1 : -1)
    this.setState({
      pigInfo: [...sort]
    })
    }
    
    handleWeightSort = () =>{
      console.log("Sorting Weight")

      let sort = this.state.pigInfo.sort((first,last) => first.weight > last.weight? 1 : -1)
      
      this.setState({
        pigInfo: [...sort]
      })
    }
  render() {
    // {console.log(hogs)}
    return (
      <div className="App">
          < Nav 
          onReset={this.handleReset} 
          onSortGreased={this.handleSortGreased}
          onSortName={this.handleSortName}
          onSortWeight={this.handleWeightSort}
          />
          <PigContainer pigInfo={this.state.pigInfo}/>
      </div>
    )
  }
}
export default App;