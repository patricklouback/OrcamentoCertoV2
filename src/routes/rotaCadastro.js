import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Cadastro from '../screens/cadastro';
import Home from "../screens/home";
import Login from "../screens/login";

export function RotaCadastro(){
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'login'
                component={Login}
            />
            <Screen
                name = 'cadastro'
                component={Cadastro}
            />
            <Screen
                name = 'home'
                component={Home}
            />

        </Navigator>
    )
}