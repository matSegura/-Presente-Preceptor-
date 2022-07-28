import React from "react";
import { Text, View, Button}  from "react-native";

//Seleccion del año 1ro 
export default function SelecAño(){
    return(
        <View>
         <Text>Seleccione un año</Text>
         <Button title="1°"/>
         <Button title="2°"/>
         <Button title="3°"/>
         <Button title="4°"/>
         <Button title="5°"/>
         <Button title="6°"/>
         <Button/>
         <Button/>
        </View>
    )
}