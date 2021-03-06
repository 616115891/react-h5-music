import React,{Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className={"header"} style={this.props.style ? this.props.style : null}>
                <div className={"headerBack"} onClick={this.handleBack}>
                    <i className={"icon-keyboard_arrow_left"}></i>
                </div>
                <div className={"headerTitle"}>
                    {this.props.title}
                </div>
                <div className={"headerRight"}>
                    {this.props.rightIcon ? <i className={this.props.rightIcon} style={this.props.rightIconStyle} onClick={this.props.rightAction}></i> : null}
                </div>
            </div>
        )
    }

    handleBack() {
        window.history.back();
    }
}