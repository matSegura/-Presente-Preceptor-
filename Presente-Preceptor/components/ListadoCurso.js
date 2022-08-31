import React from "react" 
import {Text, Button,View} from "react-native"


//Esta parte se encarga de estar listado por curso
export default function ListadoCurso (){
    return(
        <View>
            <Text> Curso {Curso}</Text>  
            <Text> Nombre del preceptor {Preceptor} </Text> 
            <Text> Turno {Turno}</Text> 
            <Text> Nombre del Alumno {Alumno}</Text> 
            <Text> A </Text> 
            <Text> p </Text> 
            <Text> T </Text> 
            <Button title=""/>
            <Button title=""/>
            <Button title=""/>
        </View>
    )
}