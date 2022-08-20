import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstScreen from "@Screens/first";
import BreatheScreen from "@Screens/Breathe/Breathe";
import BulbScreen from "@Screens/Bulb/Bulb";
import ChanelScrollScreen from "@Screens/ChanelScroll/ChanelScroll";
import GlassmorphismScreen from "@Screens/Glassmorphism/Glassmorphism";
import HoverScreen from "@Screens/Hover/Hover";
import ImageFilterScreen from "@Screens/ImageFilter/ImageFilter";
import PhoneRingScreen from "@Screens/PhoneRing/PhoneRing";
import ReactLogoScreen from "@Screens/ReactLogo/ReactLogo";
const Drawer = createDrawerNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="First" component={FirstScreen} />
        <Drawer.Screen name="Breathe" component={BreatheScreen} />
        <Drawer.Screen name="Bulb" component={BulbScreen} />
        <Drawer.Screen name="ChanelScroll" component={ChanelScrollScreen} />
        <Drawer.Screen name="Glassmorphism" component={GlassmorphismScreen} />
        <Drawer.Screen name="Hover" component={HoverScreen} />
        <Drawer.Screen name="ImageFilter" component={ImageFilterScreen} />
        <Drawer.Screen name="PhoneRing" component={PhoneRingScreen} />
        <Drawer.Screen name="ReactLogo" component={ReactLogoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Route;
