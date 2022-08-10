import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';

const { Screen, Navigator } = createNativeStackNavigator();

import TelaCamera from "../screens/camera";

export function RotaCamera(){
    const route = useRoute();
    const { uid } = route.params;
    
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'camera'
                component={TelaCamera}
                initialParams={{ uid: uid }}
            />
        </Navigator>
    )
}