import React from "react"
import {Text, Button, View} from "react-native"

//Seleccionar si es taller o teoria
export default function Selec(){
    return(
        <View>
        <Button placerholder="Teoria"/>
        <Button placerholder="Taller"/>
        </View>
    )
} 