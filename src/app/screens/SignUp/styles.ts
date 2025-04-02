import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export const Container = styled.View`
    flex: 1;
    margin: 0 ${RFValue(16)}px;
    margin-top: ${RFValue(32)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const TitleLevel = styled.Text`
    flex: 1;
    font-size: ${RFValue(16)}px;
    margin-left: ${RFValue(-32)}px;
    text-align: center;
    font-weight: 600;
`;


export const SubTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    margin-bottom: ${RFValue(16)}px;
    text-align: justify;
`;

export const SubTitleLevel2 = styled.Text`
    font-size: ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;
    text-align: justify;
    font-weight: 500;
`;

export const ContainerButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(48)}px;
  align-items: center;
  padding: 0 ${RFValue(32)}px;
  justify-content: center;
  border-radius: 4px;
  background-color: #00B74C;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(21)}px;
  font-weight: 500;
`;

export const IconInput = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(24)}px;
  color: #333333;
  padding-right: ${RFValue(16)}px;
`;

export const CheckboxContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(21)}px;
  margin-left: ${RFValue(8)}px;
`;

export const CheckboxContainerText = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const CheckboxText = styled.Text`
  margin-left: ${RFValue(8)}px;

`;

export const SubTitleLevel7 = styled.Text`
    font-size: ${RFValue(19)}px;
    color: #00B74C;
    font-weight: 600;
    text-align: center;
`;