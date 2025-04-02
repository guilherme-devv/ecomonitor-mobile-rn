import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    backgroundColor: string
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: backgroundColor;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(21)}px;
`;