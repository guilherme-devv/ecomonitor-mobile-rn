import { Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ButtonText, Container, ContainerButton, IconInput, SubTitle, SubTitleLevel2, Title, TitleLevel } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import Input from "../../../components/input";

export default function Level4 (){

    function handleNavigate() {
        router.replace("/screens/SignUp/Level5");
    }

    function handleNavigateIndex() {
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
                <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={handleNavigateIndex}>
                    <IconInput name="arrow-left" />
                </TouchableOpacity>
                <TitleLevel>E-mail</TitleLevel>
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: RFValue(16)}}>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#D9D9D9" }}></View>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#D9D9D9" }}></View>
            </View>

            <SubTitleLevel2>Insira o seu e-mail</SubTitleLevel2>
            <SubTitle>Adicione seu e-mail para atualizar.</SubTitle>

            <Input label="E-mail" placeholder="exemplo@exemplo.com" keyboardType="email-address" />

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../../../img/logo-transparent.png')} style={{ width: RFValue(300), height: RFValue(100) }} />
            </View>

            <View style={{ width: "100%", position: "absolute", bottom: 0, marginBottom: RFValue(16) }}>
                <ContainerButton onPress={handleNavigate}>
                    <ButtonText>Próximo</ButtonText>
                </ContainerButton>
            </View>

        </Container>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}