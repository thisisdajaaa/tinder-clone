import React from "react";
import { useNavigation } from "@app/hooks";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>I am home screens</Text>
      <Button title="Go to Chat Screen" onPress={() => navigate("Chat")} />
    </View>
  );
};

export default HomeScreen;
