import "react-native-gesture-handler";
import App from "./components/Login";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import SelecAño from "./components/SelecAño";

export default function App() {

  return (
    <View>
      
    </View>
  );






























 /* const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <SelecAño/>
        <Selec/>
        <IniUsers/>
        <ListadoCurs1erAño/>
        <ListadoCurs2doAño/>
        <ListadoCurs3erAño/>
        <ListadoCurs4toAño/>
        <ListadoCurs5toAño/>
        <ListadoCurs6toAño/>
        <ListadoTaller/>
        <SelecTurno/>
      </SafeAreaProvider>
    );
  }*/
}
