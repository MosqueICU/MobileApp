// In App.js in a new project

import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapPage, {MiniMap} from './pages/MapPage';
import RiveComponent from './components/RiveComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlatlistComponent, {
  FlatlistHorizontalComponent,
  MyListFlatlist,
} from './components/FlatlistComponent';
import {
  NativeBaseProvider,
  Heading,
  VStack,
  Box,
  Center,
  HStack,
} from 'native-base';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ExploreFlatlist from './components/FlatlistComponent';
import HadithPage from './pages/HadithPage';
import CompassPage from './pages/CompassPage';
import DuaPage from './pages/DuaPage';
import CharityPage from './pages/CharityPage';
import FastingPage from './pages/FastingPage';
import PrayerPage from './pages/PrayerPage';
import ThikrPage from './pages/ThikrPage';
import EducatePage from './pages/EducatePage';
import QuranPage from './pages/QuranPage';
import BottomsheetModalComponent from './components/BottomsheetModalComponent';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {CustomHeader, CustomSubHeader} from './components/TextVariations';

function HomePage() {
  const navigation = useNavigation();
  return (
    <ScrollView bounces={false}>
      <Box safeArea flex="1" pt="5" px="10" bg="#020002">
        <HStack
        // justifyContent="center" alignItems="center"
        >
          <VStack>
            <CustomHeader text={'DAILY PRAYERS'} />
            <CustomSubHeader text={'Isha in 3h 20m'} />
          </VStack>
        </HStack>
        <Center mt="10" h="20">
          <RiveComponent
            resourceName={'ratings'}
            styleProp={{width: 250, height: 200}}
          />
        </Center>
      </Box>
      <Box>
        <Box bg="#020002">
          <MyListFlatlist />
        </Box>

        <Box flex="1" p="10" bg="#020002">
          <HStack mb="5" justifyContent={'space-between'}>
            <VStack space={2}>
              <Text
                style={{
                  // fontFamily: 'Agrandir-GrandHeavy',
                  // fontSize: 20,
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

    // <SafeAreaView style={{flex: 1, backgroundColor: '#010002'}}>
    //   <View
    //     style={{
    //       borderRadius: 10,
    //       height: 100,
    //       // borderColor: 'grey',
    //       // borderWidth: 0.4,
    //       padding: 10,
    //       margin: 10,
    //     }}>
    //     <View
    //       style={{
    //         position: 'absolute',
    //         top: 0,
    //         right: 0,
    //         borderColor: 'grey',
    //         borderWidth: 0.4,
    //         // borderRadius: 10,
    //         borderTopRightRadius: 10,
    //         borderBottomLeftRadius: 5,
    //         width: 30,
    //         alignItems: 'center',
    //         height: 30,
    //         opacity: 0.7,
    //         backgroundColor: 'white',
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 25,
    //           fontFamily: 'DINOffcPro-Black',
    //         }}>
    //         3
    //       </Text>
    //     </View>
    //     <Text
    //       style={{
    //         fontSize: 25,
    //         fontFamily: 'DINOffcPro-Black',
    //         color: 'white',
    //       }}>
    //       DAILY PRAYERS
    //     </Text>
    //     <Text
    //       style={{
    //         fontSize: 15,
    //         fontFamily: 'DINOffcPro-Black',
    //         color: 'grey',
    //       }}>
    //       Isha in 4 hours and 20 minuets
    //     </Text>
    //     <RiveComponent />
    //   </View>

    //   <View>
    //     <CardListHorizontal />
    //   </View>
    // </SafeAreaView>
    // <SafeAreaView>
    //   <CardListHorizontal />
    // </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        {/* content */}
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomePage} />
              </Stack.Group>
              <Stack.Group
                screenOptions={{presentation: 'modal', headerShown: false}}>
                <Stack.Screen name="Hadith" component={HadithPage} />
                <Stack.Screen name="Compass" component={CompassPage} />
                <Stack.Screen name="Dua" component={DuaPage} />
                <Stack.Screen name="Charity" component={CharityPage} />
                <Stack.Screen name="Fasting" component={FastingPage} />
                <Stack.Screen name="Prayer" component={PrayerPage} />
                <Stack.Screen name="Thikr" component={ThikrPage} />
                <Stack.Screen name="Educate" component={EducatePage} />
                <Stack.Screen name="Quran" component={QuranPage} />
              </Stack.Group>
              <Stack.Group
                screenOptions={{presentation: 'modal', headerShown: false}}>
                <Stack.Screen name="Map" component={MapPage} />
              </Stack.Group>
              {/* <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Group> */}
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
