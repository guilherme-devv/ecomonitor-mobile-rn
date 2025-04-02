import { SvgXml } from 'react-native-svg';
import { Container, ContainerList, IconInput, IconList2, TextList, Title } from '../Home/styles';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View } from 'react-native';
import { SubContainer } from './styles';
import { router } from 'expo-router';


export default function DadosporMunicipios() {

  const svgContent3 =`
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 22C0 9.85089 9.85089 0 22 0C34.1491 0 44 9.85089 44 22C44 34.1491 34.1491 44 22 44C9.85089 44 0 34.1491 0 22ZM3.73214 22C3.73214 32.0866 11.9134 40.2679 22 40.2679C32.0866 40.2679 40.2679 32.0866 40.2679 22C40.2679 11.9134 32.0866 3.73214 22 3.73214C11.9134 3.73214 3.73214 11.9134 3.73214 22ZM23 32H25V30H23V32ZM27 30H29V32H27V30ZM23 26H25V28H23V26ZM15 30H17V32H15V30ZM15 26H17V28H15V26ZM27 26H29V28H27V26ZM23 22H25V24H23V22ZM27 22H29V24H27V22ZM32.4142 18.5858C32.0391 18.2107 31.5304 18 31 18V16C31 15.4696 30.7893 14.9609 30.4142 14.5858C30.0391 14.2107 29.5304 14 29 14H27V10H25V14H23C22.4696 14 21.9609 14.2107 21.5858 14.5858C21.2107 14.9609 21 15.4696 21 16V18C20.4696 18 19.9609 18.2107 19.5858 18.5858C19.2107 18.9609 19 19.4696 19 20V22H13C12.4696 22 11.9609 22.2107 11.5858 22.5858C11.2107 22.9609 11 23.4696 11 24V32H13V24H19V32H21V20H31V32H33V20C33 19.4696 32.7893 18.9609 32.4142 18.5858ZM29 16V18H23V16H29Z" fill="#00B74C"/>
</svg>

  `;
  const svgContent9 =``;

  function handleNavigate2() {
    router.replace("/screens/Home");

  }

  function handleNavigate3() {
    router.replace("/screens/Chorozinho");

  }

  function handleNavigate() {
    router.replace("/screens/Atu");

  }


    return (
        <>
        <StatusBar backgroundColor="#00B74C" />
        <Container>
            <TouchableOpacity onPress={handleNavigate2}>
                <IconInput name="chevron-left" />
            </TouchableOpacity>

            <Title>DADOS POR MUNICÍPIOS</Title> 
            <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={() => {}}>
            <IconInput name="settings" />
            </TouchableOpacity>
        </Container>

        <SubContainer>

        <TouchableOpacity onPress={handleNavigate3}>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>CHOROZINHO</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigate}>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>GUAIUBA</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        <TouchableOpacity>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>HORIZONTE</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        <TouchableOpacity>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>ITAITINGA</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        <TouchableOpacity>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>MARANGUAPE</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        <TouchableOpacity>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>OCARA</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        <TouchableOpacity>
          <ContainerList>
            <SvgXml xml={svgContent3}  />
            <TextList>PACAJUS</TextList>
            <IconList2  name="chevron-right" />
          </ContainerList>
        </TouchableOpacity>

        </SubContainer>
        
        </>
    )
}