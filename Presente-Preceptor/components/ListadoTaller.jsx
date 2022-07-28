import React from "react" 
import {Text, Button,View} from "react-native"


//Esta parte del codigo se encarga de ser la pantalla del listado de taller 
export default function ListadoTaller(){
    return(
        <View>
        <Text>Listado Taller {ListT}</Text>
        <Text> Nombre Taller{NomT}</Text>
        <Text> Nombre del Alumno {NomAlum}</Text>
        <Text> A </Text> 
        <Text> P </Text> 
        <Text> T </Text> 
        <Button title=""/>
        <Button title=""/>
        <Button title=""/>
        </View>
    )
}