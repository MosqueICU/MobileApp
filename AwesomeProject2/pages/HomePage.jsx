// In App.js in a new project

import * as React from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MiniMap} from '../pages/MapPage';
// import RiveComponent from '../components/RiveComponent';
import {MyListFlatlist} from '../components/FlatlistComponent';
import {Heading, VStack, Box, Center, HStack} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ExploreFlatlist} from '../components/FlatlistComponent';
import BottomsheetModalComponent from '../components/BottomsheetModalComponent';
import {CustomHeader, CustomSubHeader} from '../components/TextVariations';

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <ScrollView bounces={false}>
      <Box safeArea flex="1" pt="5" px="10" bg="#020002">
        <HStack>
          <VStack>
            <CustomHeader text={'DAILY PRAYERS'} />
            <CustomSubHeader text={'Isha in 3h 20m'} />
          </VStack>
        </HStack>
        <Center mt="10" h="20">
          {/* <RiveComponent
            resourceName={'ratings'}
            styleProp={{width: '100%', height: 200}}
          /> */}
        </Center>
      </Box>

      <Box>
        <Box bg="#020002">
          <MyListFlatlist />
        </Box>

        <Box flex="1" p="10" bg="#020002">
          <HStack mb="5" h="100" justifyContent={'space-between'}>
            <VStack space={1}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Inter-Regular',
                  color: 'grey',
                }}>
                Chosen
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: 'Agrandir-GrandHeavy',
                  fontStyle: 'italic',
                  fontWeight: '900',
                  color: 'white',
                }}>
                For You
              </Text>
            </VStack>
            <Box>
              <BottomsheetModalComponent
                trigger={
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: 'Inter-Bold',
                      color: 'grey',
                    }}>
                    See more
                  </Text>
                }
              />
            </Box>
          </HStack>
          <ExploreFlatlist />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map');
            }}>
            <Box
              overflow="hidden"
              my="10"
              borderWidth="1px"
              borderColor={'grey'}
              rounded="xl"
              w="100%"
              h="200">
              <MiniMap />
              <Box
                px="5"
                justifyContent="center"
                // roundedBottom="xl"
                position="absolute"
                opacity="0.7"
                bg="black"
                borderBottomWidth="1px"
                borderColor={'grey'}
                bottom="0"
                w="100%"
                h="10">
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'DINOffcPro-Black',
                    color: 'white',
                  }}>
                  Find places on the map
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
          <Center pb="10">
            <Heading sub color="white">
              You are not subscribed to anyone
            </Heading>
            <Heading sub color="grey">
              News from subscriptions will appear here
            </Heading>
          </Center>
        </Box>
      </Box>
    </ScrollView>
  );
}
