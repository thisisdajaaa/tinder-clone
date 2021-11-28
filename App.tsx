import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import StackNavigator from "@app/navigators";
import AuthProvider from "@app/providers/AuthProvider";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
