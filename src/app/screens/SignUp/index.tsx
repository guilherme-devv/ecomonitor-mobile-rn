import { Image, View, Dimensions } from "react-native";
import { ButtonText, Container, ContainerButton, SubTitle, Title } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";

export default function SignUp (){

    const screenWidth = Dimensions.get("window").width; 
    console.log(screenWidth)
    const imageHeight = screenWidth * (330 / 350); 

    function handleNavigate() {
        router.replace("/screens/SignUp/Level2");
    }

    return (
        <Container>
            <Title>Para obter aprovação</Title>
            <SubTitle>Solicitamos que você nos forneça algumas informações essenciais para prosseguir com sua aprovação administrativa.</SubTitle>

            <Image 
                source={require('../../../img/logo-signUp.png')} 
                style={{ 
                    width: screenWidth * 0.9, 
                    height: imageHeight, 
                    resizeMode: "contain" 
                }} 
            />

            <View style={{ width: "100%", position: "absolute", bottom: 0, marginBottom: RFValue(16) }}>
                <ContainerButton onPress={handleNavigate}>
                    <ButtonText>Continue</ButtonText>
                </ContainerButton>
            </View>
        </Container>
    )
}
