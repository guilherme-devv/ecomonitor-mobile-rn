import { Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ButtonText, Container, ContainerButton, IconInput, SubTitle, SubTitleLevel2, Title, TitleLevel } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import Input from "../../../components/input";

export default function Level5 (){

    function handleNavigate() {
        router.replace("/screens/SignUp/Level6");
    }

    function handleNavigateIndex() {
        router.replace("/screens/SignUp/Level4");
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
                <TitleLevel>Documento de Identidade</TitleLevel>
            </View>
            
            <View style={{ flexDirection: "row", marginBottom: RFValue(16)}}>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
                <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#D9D9D9" }}></View>
            </View>

            <SubTitle>Insira suas informações exatamente como aparecem em seu documento de identidade que possa verificar sua elegibilidade.</SubTitle>

            <Input label="Nome Completo" placeholder="Fulano Fulano Fulano"  />
            <Input label="Data de Nascimento" placeholder="00/00/0000"  />
            <Input label="CPF" placeholder="000.000.000-00" keyboardType="numeric" maxLength={11} />
            <Input label="Cidade" placeholder="Ex: Fortaleza"  />


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