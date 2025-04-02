import styled from "styled-components/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    height: 10%;
    background-color: #00B74C;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding:0 ${RFValue(16)}px;

`;

export const SubContainer = styled.View`
    flex: 2;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 0 ${RFValue(16)}px;
    background-color: white;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.24;
    shadow-radius: 3.84px;

`;

export const Footer = styled.ScrollView`
    flex: 1;
    padding:${RFValue(16)}px;
`;

export const IconInput = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
  color: #FFF;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #FFF;
    font-weight: 600;
`;

export const ContainerPicker = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #00B74C;
    padding: ${RFValue(16)}px;
    margin-top: ${RFValue(16)}px;
    border-radius: 4px;
`;

export const TitleCalendar = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #00B74C;
    text-align: right;
    font-weight: 600;
`;

export const ContainerWeek = styled.View`
    flex-direction: row;

    margin: ${RFValue(16)}px 0;
    justify-content: space-between;
`;


export const TextWeek = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #BBBBBB;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: #DCDBDB;
`;

export const LineGreen = styled.View`
    width: 30%;
    height: 3px;
    background-color: #00B74C;
`;

export const ContainerQuantity = styled.View`
    align-items: center;
    margin-top: ${RFValue(16)}px;
`;

export const TextQuantity = styled.Text`
    font-size: ${RFValue(32)}px;
    font-weight: 700;
`;

export const TextTotal = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #BBBBBB;
    margin-top: ${RFValue(8)}px;
    font-weight: 600;
`;

export const ContainerInfoDay = styled.View`
    margin-left: ${RFValue(8)}px;
`;

export const ContainerDay = styled.View`
    margin: ${RFValue(16)}px 0;
    flex-direction: row;
    align-items: center;
`;

export const IconDay = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(28)}px;
    color: #78C800;
`;

export const TextDayQuantity = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #78C800;
    font-weight: 600;

`;

export const TextDay = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #BBBBBB;
`;

export const IconDay2 = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(28)}px;
    color: #FB8E87;
`;

export const TextDayQuantity2 = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #FB8E87;
    font-weight: 600;

`;

export const TextDay2 = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #BBBBBB;
`;


export const ContainerList = styled.View`
    flex-direction: row;
    align-items: center;
    height:  ${RFValue(70)}px;

    justify-content: space-between;
    background-color: white;
    margin-bottom: ${RFValue(14)}px;
    padding: 0 ${RFValue(14)}px;
    border-radius: 8px;
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.20;
    shadow-radius: 3.84px;


`;

export const TextList = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 600;
`;


export const IconList = styled(MaterialIcons)`
    font-size: ${RFValue(28)}px;
    color: #00B74C;
    padding: ${RFValue(8)}px;
`;


export const IconList2 = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(24)}px;
    color: #00B74C;
`;



