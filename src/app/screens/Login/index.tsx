import React, { useState } from "react";
import { Container, Title, SubContainer, ContainerButton, ButtonText, SubTitle, Line, ContainerButtonSecondary, ButtonTextSecondary, SubTitleNew } from "./styles";
import { router } from "expo-router";
import { Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AuthService from "../../services/authService";
import { Ionicons } from "@expo/vector-icons";

export default function Login(): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Formatar telefone manualmente com máscara dinâmica
  const formatPhoneNumber = (text: string) => {
    let rawText = text.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (rawText.length > 2 && !rawText.startsWith("55")) {
      rawText = `55${rawText}`;
    }
    if (rawText.length <= 2) {
      setPhoneNumber("+55"); // Permite apagar tudo e reiniciar a digitação
      return;
    }
    
    let formatted = `+${rawText}`;
    if (rawText.length > 4) {
      formatted = `+${rawText.slice(0,2)} (${rawText.slice(2,4)}) `;
    }
    if (rawText.length > 9) {
      formatted += `${rawText.slice(4,9)}-${rawText.slice(9,13)}`;
    } else if (rawText.length > 4) {
      formatted += `${rawText.slice(4)}`;
    }
    
    setPhoneNumber(formatted);
  };

  async function handleLogin() {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, ""); 
    const response = await AuthService.login(`+${rawPhoneNumber}`, password);
  
    if ("access" in response) {
      Alert.alert("Sucesso", "Login realizado com sucesso!", [{ text: "OK", onPress: () => {
        setTimeout(() => {
          router.replace("/screens/Home");
        }, 100);
      }}]);
    } else {
      Alert.alert("Erro", response.detail || "Erro ao tentar fazer login", [{ text: "OK" }]);
    }
  }
  

  function handleNavigateSignUp() {
    router.replace("/screens/SignUp");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <Container>
          <SubContainer>
            <Image source={require("../../../img/logo-login.png")} style={{ width: RFValue(300), height: RFValue(100) }} />
            <Title>O aplicativo que está revolucionando a gestão do saneamento local</Title>
          </SubContainer>

          <View style={{ width: "100%", paddingHorizontal: RFValue(16) }}>
            {/* Campo de telefone com máscara manual */}
            <Text style={{ fontSize: RFValue(14), marginBottom: 5 }}>Número de telefone</Text>
            <TextInput
              placeholder="+55 (__) _____-____"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={formatPhoneNumber}
              maxLength={19} 
              style={{
                backgroundColor: "white",
                fontSize: RFValue(16),
                paddingVertical: 10,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />

            {/* Campo de senha com ícone de visibilidade */}
            <Text style={{ fontSize: RFValue(14), marginBottom: 5, marginTop: RFValue(10) }}>Senha</Text>
            <View style={{ flexDirection: "row", alignItems: "center", borderColor: "#ccc", borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, backgroundColor: "white" }}>
              <TextInput
                placeholder="Senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={{ flex: 1, fontSize: RFValue(16), paddingVertical: 10 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <SubTitleNew>Esqueceu sua senha?</SubTitleNew>

          <View style={{ width: "100%", paddingHorizontal: RFValue(16), marginTop: RFValue(20) }}>
            <ContainerButton onPress={handleLogin}>
              <ButtonText>Entrar</ButtonText>
            </ContainerButton>
          </View>

          <View style={{ width: "100%", paddingHorizontal: RFValue(16), marginTop: RFValue(16), alignItems: "center" }}>
            <Line />
            <SubTitle>ou</SubTitle>
          </View>

          <View style={{ width: "100%", paddingHorizontal: RFValue(16), marginTop: RFValue(32) }}>
            <ContainerButtonSecondary onPress={handleNavigateSignUp}>
              <ButtonTextSecondary>Primeiro acesso</ButtonTextSecondary>
            </ContainerButtonSecondary>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
