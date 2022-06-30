import React from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function IniUsers(){
    return(
        <View>
        <Text>Inicio de usuario</Text>
        <Text>Nombre de usuario</Text>
        <TextInput/>
        <Text placerholder="Contraseña"/>
        <TextInput/>
        <Button placerholder="Iniciar sesion"/>
        </View>   
    )
}