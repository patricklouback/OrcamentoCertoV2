import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';

const { Screen, Navigator } = createNativeStackNavigator();

import Home from "../screens/home";
import Produtos from "../screens/produtos";

export function RotaApp(){
    const route = useRoute();
    const {uid} = route.params;

    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'home'
                component={Home}
                initialParams={{uid: uid}}
            />
            <Screen
                name = 'produtos'
                component={Produtos}
            />

        </Navigator>
    )
}