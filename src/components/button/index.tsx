import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface Props extends TouchableOpacityProps {
  ButtonMainText: ReactNode;
  Color: string;
}

export function Button({Color, ButtonMainText, ...rest }: Props){
  return (
    <Container backgroundColor={Color} {...rest}>
      <ButtonText>{ButtonMainText}</ButtonText>
    </Container>
  );
}