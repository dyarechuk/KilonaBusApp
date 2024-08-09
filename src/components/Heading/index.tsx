import React from 'react';
import {Text} from 'react-native';
import {HEADING} from '../../styles/textStyles.ts';
import {styles} from './styles.ts';

interface HeadingProps {
  text: string;
  align?: 'left' | 'center' | 'right';
}

export const Heading: React.FC<HeadingProps> = ({
  text,
  align = 'left',
  ...props
}) => {
  return (
    <Text style={[HEADING.h1, styles.heading, {textAlign: align}]} {...props}>
      {text}
    </Text>
  );
};
