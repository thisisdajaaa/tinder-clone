import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "@app/hooks";

const LoginScreen = () => {
  const { user, signInWithGoogle } = useAuth();

  return (
    <View>
      <Text>{user}</Text>
      <Button title="login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
