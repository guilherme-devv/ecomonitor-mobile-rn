import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    height: ${RFValue(68)}px;
    border: solid #DCDBDB 1px;
    margin-top: ${RFValue(16)}px;
    padding: 0 ${RFValue(8)}px;
    border-radius: 8px;
`;
export const ContainerInput = styled.TextInput`
    flex: 1;
`;

export const Label = styled.Text`
    margin-top: -9px;
    margin-left: ${RFValue(16)}px;
    position: absolute;
    background-color: #FFF;
    font-size: ${RFValue(12)}px;
    color: #BBBBBB;
`;