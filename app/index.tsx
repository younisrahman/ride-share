import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn === undefined) {
    return <Text>Loading...</Text>;
  }

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
