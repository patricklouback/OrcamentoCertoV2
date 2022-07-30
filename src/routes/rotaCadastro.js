import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Cadastro from '../screens/cadastro';
import Login from "../screens/login";
import RedefinirSenha from "../screens/redefinirSenha";

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
                name = 'redefinirSenha'
                component={RedefinirSenha}
            />

        </Navigator>
    )
}