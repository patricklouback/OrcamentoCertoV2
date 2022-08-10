
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from "../screens/home";
import Produtos from "../screens/produtos";
import Configuracao from '../screens/configuracao';

export function RotaApp() {
    const route = useRoute();
    const { uid, capturedPhoto } = route.params;

    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Orçamento') {
                iconName = "attach-money";
              } else if (route.name === 'Meus Produtos') {
                iconName = "view-list";
              } else if (route.name === 'Perfil') {
                iconName = "settings";
              }
  
              // You can return any component that you like here!
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#aa8761',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        })}
        >
            <Tab.Screen name="Orçamento" component={Home} initialParams={{ uid: uid }} />
            <Tab.Screen name="Meus Produtos" component={Produtos} initialParams={{ uid: uid }} />
            <Tab.Screen name="Perfil" component={Configuracao} initialParams={{ uid: uid }} />
        </Tab.Navigator>
    )
}