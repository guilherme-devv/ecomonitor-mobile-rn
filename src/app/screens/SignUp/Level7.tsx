import { Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ButtonText, Container, ContainerButton, IconInput, SubTitle, SubTitleLevel2, SubTitleLevel7, Title, TitleLevel } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import Input from "../../../components/input";

export default function Level3 (){

    function handleNavigateLevel2() {
        router.replace("/screens/Login");
    }
    return(

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          enabled
        >
        <Container>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: RFValue(16)}}>
                <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={handleNavigateLevel2}>
                    <IconInput name="close" />
                </TouchableOpacity>

            </View>


            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../../../img/frame-level7.png')} style={{ width: RFValue(200), height: RFValue(200) }} />
            </View>

           <SubTitleLevel7>Estamos processando os dados enviados. Em breve você terá acesso ao Ecomonitor...</SubTitleLevel7>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../../../img/frame-level71.png')} style={{ width: RFValue(200), height: RFValue(70) }} />
            </View>

        </Container>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}