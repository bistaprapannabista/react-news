import React from 'react'

class Button extends React.Component{
    render(){
        return(
            <button className={`btn btn-${this.props.type}`}>{this.props.value}</button>
        )
    }
}

export default Button;