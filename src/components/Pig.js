import React from 'react'

class Pig extends React.Component{

    findPigImage = () =>{
        let imageName = this.props.pigInfo.name.split(" ").join("_").toLowerCase()
        return require(`../hog-imgs/${imageName}.jpg`)
    }

    showHideDeets = (event) => {

        let element = event.currentTarget.nextElementSibling
        if (element.className === "hidden"){
            element.className = ""
        } else if (element.className === "") {
            element.className = "hidden"
        }
    }

    hidePig = (event) => {
        let element = event.currentTarget.nextElementSibling.nextElementSibling
        console.log(element)
        if (element.className === "hidden"){
            element.className = ""
        } else if (element.className === "") {
            element.className = "hidden"
        }
    }

    render(){
        return(
            <div className="ui eight wide column" >
                <h4>{this.props.pigInfo.name}</h4>
                <button onClick={this.hidePig} >Toggle Pig</button>
                <br/>
                <img src= {this.findPigImage()} alt="pig" onClick={this.showHideDeets}></img>
                <div className = "hidden">
                    <p>Specialty: {this.props.pigInfo.specialty}</p>
                    <p>Greased: {this.props.pigInfo.greased.toString()} </p>
                    <p>Weight: {this.props.pigInfo.weight} </p>
                    <p>Highest Medal Achieved: {this.props.pigInfo["highest medal achieved"]}</p>
                </div>
            </div>
        )
    }
}
export default Pig