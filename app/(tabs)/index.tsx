import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-xl font-bold text-red-700">Hello, NativeWind!</Text>
      <TouchableOpacity className="mt-4 px-6 py-2 bg-blue-500 rounded-lg">
        <Text className="text-white text-lg font-semibold">Press Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
