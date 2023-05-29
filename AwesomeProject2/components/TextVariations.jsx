import {Text} from 'native-base';

export function CustomHeader({text}) {
  return (
    <Text
      style={{
        fontFamily: 'Agrandir-GrandHeavy',
        fontSize: 20,
        fontWeight: '900',
        fontStyle: 'italic',
        color: 'white',
      }}>
      {text}
    </Text>
  );
}

export function CustomSubHeader({text}) {
  return (
    <Text
      style={{
        fontSize: 15,
        fontFamily: 'Inter-Medium',
        color: 'grey',
      }}>
      {text}
    </Text>
  );
}
