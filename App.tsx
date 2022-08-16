import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Route from "./src/navigation/main";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Route />
      </SafeAreaView>
    </>
  );
}
