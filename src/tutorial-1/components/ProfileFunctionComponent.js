import React from "react";

const ProfileFunctionComponent = (props) =>{
    return(
        <div>
            <p>
                Привет, <b>{this.props.name}!</b>
                <br/>
                Дата регистрации: {this.props.registeredAt}
            </p>
        </div>
    );
};


export default ProfileFunctionComponent;