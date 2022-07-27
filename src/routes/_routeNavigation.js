import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();


import { RotaApp } from "./rotaApp";
import { RotaCadastro } from "./rotaCadastro";

export function RouteNavigation(){
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'rotaCadastro'
                component={RotaCadastro}
            />
            <Screen
                name = 'rotaApp'
                component={RotaApp}
            />
        </Navigator>
    )
}