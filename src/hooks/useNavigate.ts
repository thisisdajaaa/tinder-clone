import { useNavigation as useBaseNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
  Login: undefined;
};

export const useNavigation = () => {
  const { navigate, goBack } =
    useBaseNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return { navigate, goBack };
};
