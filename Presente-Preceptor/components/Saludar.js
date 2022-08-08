import React from "react";
import {Text, View} from "react-native";

export default function Saludar(props) {
    const {name} = props;

    return <text>Hola {name}</text>
}