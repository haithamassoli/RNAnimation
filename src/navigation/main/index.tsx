import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstScreen from "@Screens/first";
const Drawer = createDrawerNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="First" component={FirstScreen} />
        <Drawer.Screen name="Second" component={FirstScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Route;
