import { NavigationContainer } from "@react-navigation/native";

import { RouteNavigation } from "./_routeNavigation";

export function Routes(){
    return (
        <NavigationContainer>
            <RouteNavigation/>
        </NavigationContainer>
    )
}