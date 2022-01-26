import React from "react";


class ProfileClassComponent extends React.Component{
    render() {
        return(
        <div>
            <p>
            Привет, <b>{this.props.name}!</b>
            </p>
            <br/>
            <p>
            Дата регистрации: {this.props.registeredAt}
            </p>
        </div>);
    }
}

export default ProfileClassComponent;