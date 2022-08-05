import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';

const { Screen, Navigator } = createNativeStackNavigator();

import Camera from "../screens/camera";
import Configuracao from "../screens/configuracao";

export function ConfigStack(){
    const route = useRoute();
    const { uid } = route.params;
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'Configuração'
                component={Configuracao}
                initialParams={{ uid: uid }}
            />
            <Screen
                name = 'camera'
                component={Camera}
            />
        </Navigator>
    )
}