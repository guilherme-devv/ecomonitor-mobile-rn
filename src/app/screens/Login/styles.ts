import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(16)}px;
`;

export const SubContainer = styled.View`
    align-items: center;
    margin-bottom: ${RFValue(16)}px;
    padding: 0 ${RFValue(32)}px;
`;

export const ContainerSubTitle = styled.View`
`;

export const Line = styled.View`
    margin-top: 18px;
    width: 100%;
    height: 1px;
    background-color: #6AE356;
`;

export const SubTitle = styled.Text`
    text-align: center;
    background-color: #FFF;
    width: 30px;
    margin-top: -12px;
    font-size: ${RFValue(16)}px;
    color: #6AE356;
`;

export const SubTitleNew = styled.Text`
    text-align: center;
    font-size: ${RFValue(14)}px;
    color: #6AE356;
    margin-top: ${RFValue(8)}px;
`;

export const ContainerButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(48)}px;
  align-items: center;
  padding: 0 ${RFValue(32)}px;
  justify-content: center;
  border-radius: 4px;
  background-color: #316727;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(21)}px;
  font-weight: 500;
`;

export const ContainerButtonSecondary = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(48)}px;
  align-items: center;
  padding: 0 ${RFValue(32)}px;
  justify-content: center;
  border-radius: 4px;
  background-color: #58BA47;
`;

export const ButtonTextSecondary = styled.Text`
  color: #FFF;
  font-size: ${RFValue(21)}px;
  font-weight: 500;
`;