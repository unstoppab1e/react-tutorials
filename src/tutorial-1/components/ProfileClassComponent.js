import React from "react";


class ProfileClassComponent extends React.Component{
    name = this.props.name.split(" ")[0];
    date = this.props.registeredAt.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    render() {
        return(
        <div>
            <p>
            Привет, <b>{this.name}!</b>
            <br/>
            Дата регистрации: {this.date}
            </p>
        </div>);
    }
}

export default ProfileClassComponent;