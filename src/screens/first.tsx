import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

const FirstScreen = () => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const opacity = useSharedValue(0.5);
  const borderRadius = useSharedValue(20);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: offsetX.value,
        },
        {
          translateX: offsetX.value,
        },
        {
          rotate: `${offsetY.value}rad`,
        },
        {
          scale: offsetY.value / 10,
        },
      ],
      opacity: withSpring(opacity.value),
      borderRadius: withSpring(borderRadius.value),
      backgroundColor: withSpring(`rgba(0,0,0,${opacity.value})`),
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: "blue",
          },
          animatedStyles,
        ]}
      />
      <Button
        onPress={() => {
          offsetX.value = withRepeat(withSpring(Math.random() * 100), -1, true);
          offsetY.value = withRepeat(withSpring(Math.random() * 100), -1, true);
          opacity.value = withRepeat(withSpring(Math.random() * 2), -1, true);
          borderRadius.value = withRepeat(
            withSpring(Math.random() * 100),
            -1,
            true
          );
        }}
        title="Move"
      />
    </View>
  );
};

export default FirstScreen;
