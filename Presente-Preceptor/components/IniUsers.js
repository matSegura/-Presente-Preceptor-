import React from "react";
import { Text, TextInput, View, Button } from "react-native";


//El inicio de usuario
export default function IniUsers(){
    return(
        <View>
            <Text>Inicio de usuario</Text>
            <Text>Nombre de usuario</Text>
            <TextInput/>
            <Text>Contraseña</Text>
            <TextInput/>
            <Button title="Iniciar sesion"/>
        </View>   
    )
}