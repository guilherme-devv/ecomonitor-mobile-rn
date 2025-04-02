import { Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ButtonText, Container, ContainerButton, IconInput, SubTitle, SubTitleLevel2, Title, TitleLevel } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import Input from "../../../components/input";

export default function Level3 (){

    function handleNavigate() {
        router.replace("/screens/SignUp/Level4");
    }

    function handleNavigateLevel2() {
        router.replace("/screens/SignUp/Level2");
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

            <SubTitleLevel2>Código de verificação</SubTitleLevel2>
            <SubTitle>Digite o código enviado para +559036464851.</SubTitle>

            <View style={{ flexDirection: "row", marginBottom: RFValue(16)}}>
                <View style={{width: "24%", marginRight: "1%"}}>
                    <Input keyboardType="phone-pad" />
                </View>
                <View style={{width: "24%", marginRight: "1%"}}>
                    <Input keyboardType="phone-pad" />
                </View>
                <View style={{width: "24%", marginRight: "1%"}}>
                    <Input keyboardType="phone-pad" />
                </View>
                <View style={{width: "24%", marginRight: "1%"}}>
                    <Input keyboardType="phone-pad" />
                </View>
            </View>
            <SubTitle>Não recebeu código? Reenviar</SubTitle>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../../../img/logo-transparent.png')} style={{ width: RFValue(300), height: RFValue(100) }} />
            </View>



            <View style={{ width: "100%", position: "absolute", bottom: 0, marginBottom: RFValue(16) }}>
                <ContainerButton onPress={handleNavigate}>
                    <ButtonText>Verificar e continuar</ButtonText>
                </ContainerButton>
            </View>

        </Container>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}