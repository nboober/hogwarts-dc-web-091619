import React from 'react'
import Pig from "./Pig.js"

class PigContainer extends React.Component{
    render(){
        let hogArray = this.props.pigInfo;
        return(
            <div className="ui grid container">
            {console.log(hogArray)}
                {hogArray.map((hog) => {
                    return <Pig key={hog.name} pigInfo={hog}/>
                })}
            </div>
        )
    }
}

export default PigContainer