import React from "react" 
import {Text, Button,View,} from "react-native"

export default function ListadoTaller(){
    return(
        <View>
        <Text>Listado Taller {ListT}</Text>
        <Text> Nombre Talle{NomT}r</Text>
        <Text placeholder="Nombre del Alumno"/>
        <Button placeholder="A"/>
        <Button placeholder="P"/>
        <Button placeholder="T"/>
        <Button/>
        <Button/>
        <Button/>
        </View>
    )
}