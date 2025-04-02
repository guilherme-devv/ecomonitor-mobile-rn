import React, { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ButtonText, CheckboxContainer, CheckboxContainerText, CheckboxText, Container, ContainerButton, IconInput, SubTitle, SubTitleLevel2, Title, TitleLevel } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import axios from "axios";

export default function Level6() {
  const [isChecked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("5585986089669");
  const [email, setEmail] = useState("gui@gmail.com");
  const [fullName, setFullName] = useState("Guilherme");
  const [dob, setDob] = useState("2020-03-17");
  const [cpf, setCpf] = useState("60807398365");
  const [city, setCity] = useState("fortaleza");

  const handleNavigate = () => {
    // Enviar os dados para criar o usuário via API
    axios
      .post("http://54.221.28.215:8000/api/users", {
        number_of_phone: "string",
        email: "asdas@example.com",
        first_name: "string",
        last_name: "string",
        city: "string",
        cpf: "string",
        date_of_birth: "2025-04-01",
        password: "string",
        type: 1
      }, {
        headers: {
          'accept': 'application/json',
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        // Usuário criado com sucesso, navegue para a próxima tela
        router.replace("/screens/SignUp/Level7");
      })
      .catch((error) => {
        console.error("Erro ao criar usuário:", error);
      });
  };

  const handleNavigateIndex = () => {
    router.replace("/screens/SignUp/Level5");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <Container>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: RFValue(16) }}>
            <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={handleNavigateIndex}>
              <IconInput name="arrow-left" />
            </TouchableOpacity>
            <TitleLevel>Termos e Políticas</TitleLevel>
          </View>

          <View style={{ flexDirection: "row", marginBottom: RFValue(16) }}>
            <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
            <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
            <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
            <View style={{ width: "24%", height: RFValue(4), marginRight: "1%", backgroundColor: "#00B74C" }}></View>
          </View>

          <Image source={require("../../../img/frame-level6.png")} style={{ width: RFValue(80), height: RFValue(80) }} />

          <SubTitleLevel2>Aceite os termos e revise a política de privacidade</SubTitleLevel2>
          <SubTitle>
            Ao selecionar “Eu concordo” abaixo, revi e concordo com os Termos de Uso e reconheço a Política de Privacidade. Tenho pelo menos
            18 anos de idade.
          </SubTitle>

          <View style={{ height: "35%", alignItems: "center", justifyContent: "center" }}>
            <Image source={require("../../../img/logo-transparent.png")} style={{ width: RFValue(300), height: RFValue(100) }} />
          </View>

          <CheckboxContainer>
            <Checkbox color={"#333333"} value={isChecked} onValueChange={setChecked} />
            <CheckboxContainerText>
              <CheckboxText> Eu concordo </CheckboxText>
            </CheckboxContainerText>
          </CheckboxContainer>

          <View style={{ width: "100%", position: "absolute", bottom: 0, marginBottom: RFValue(16) }}>
            <ContainerButton onPress={handleNavigate}>
              <ButtonText>Enviar</ButtonText>
            </ContainerButton>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
