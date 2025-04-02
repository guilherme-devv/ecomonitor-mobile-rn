import { Container, ContainerInput, Label } from "./styles";

export default function Input({label, ...rest}: any){
    return (
        <Container>
            <Label>{label}</Label>
            <ContainerInput {...rest}/>
        </Container>
    )
}