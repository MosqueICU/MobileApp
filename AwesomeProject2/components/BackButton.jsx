import React from 'react';
import {Button, Box, Center, NativeBaseProvider, Heading} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const BackButton = ({customFunction}) => {
  const navigation = useNavigation();
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      backgroundColor: '#facc15',
      borderColor: '#CA8A04',
      borderWidth: 1,
      borderRadius: 4,
    }; //@ts-ignore

    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);
  return (
    <Box p="5" alignItems="center">
      <Button
        onPress={() => {
          navigation.goBack() || customFunction;
        }}
        size="sm"
        variant={'solid'}
        _text={{
          color: '#1F2937',
        }}
        ref={myRef}
        px="3">
        <Heading sub> {`< Go back`} </Heading>
      </Button>
    </Box>
  );
};

export default () => {
  return <BackButton />;
};
