import React from "react-native";
import { Text, Button, View } from "react-native";

import React from "react";
import { Text, View, Button}  from "react-native";


export default function SelecAño(){
    return(
        <View>
         <Text>Seleccione un año</Text>
         <Button title="1°"/>
         <Button title="2°"/>
         <Button placeholder="3°"/>
         <Button placeholder="4°"/>
         <Button placeholder="5°"/>
         <Button placeholder="6°"/>
         <Button/>
         <Button/>
        </View>
    )
}