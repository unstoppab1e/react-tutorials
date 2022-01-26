import React from "react";
import ProfileFunctionComponent from "./components/ProfileFunctionComponent";
import ProfileClassComponent from "./components/ProfileClassComponent";

const App = () => {
    return(
    <div>
        <ProfileFunctionComponent name="Вася Пупкин" registeredAt={new Date(2021,5,22)} />


        <ProfileClassComponent name="Вася Пупкин" registeredAt={new Date(2021,5,22)} />


    </div>
    );
}
export default App;