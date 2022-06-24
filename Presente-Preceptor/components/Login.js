import React from "react-native";
import { Button, TextInput, Text, View } from "react-native";

export default function Login{
    return(
        <View>
        <text placeholder= "Nonbre de usuario"/>,
        <TextInput placeholder="...."/>;
        <text placeholder= "Contraseña"/>,
        <TextInput placeholder="...."/>;
        <button title="Iniciar usuario administrador"></button>
        </View>
    );
}