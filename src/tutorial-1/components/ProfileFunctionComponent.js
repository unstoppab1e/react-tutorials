import React from "react";

const ProfileFunctionComponent = (props) =>{
    const name = props.name.split(" ")[0];
    const date = props.registeredAt.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return (
        <div>
            <p>
                Привет, <b>{name}!</b>
                <br/>
                Дата регистрации: {date}
            </p>
        </div>
    );
};


export default ProfileFunctionComponent;