import React from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function IniUsers(){
    return(
        <View>
        <Text placerholder="Inicio de usuario"/>
        <Text placerholder="Nombre de usuario"/>
        <TextInput/>
        <Text placerholder="Contraseña"/>
        <TextInput/>
        <Button placerholder="Iniciar sesion"/>
        </View>   
    )
}