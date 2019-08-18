import React, {Component, Fragment} from "react";
import './Icon.css'

class Icon extends Component{

    
    render () {
        return (
            <Fragment>
                <i className = {this.props.className} id = {this.props.id} onClick={this.props.onClick}></i>
            </Fragment>
        );

    }
}
export default Icon;