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
} from './components/FlatlistComponent';
import {NativeBaseProvider, Heading, Box, HStack} from 'native-base';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

function HomePage() {
  const navigation = useNavigation();
  return (
    <ScrollView bounces={false}>
      <Box safeArea flex="1" pt="5" px="10" bg="#020002">
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'DINOffcPro-Black',
            color: 'white',
          }}>
          DAILY PRAYERS
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'DINOffcPro-Black',
            color: 'grey',
          }}>
          Isha in 3h 20m
        </Text>
        <Box h="150">
          <RiveComponent />
        </Box>
      </Box>
      <Box>
        <Box bg="#020002">
          <FlatlistHorizontalComponent />
        </Box>

        <Box flex="1" p="10" bg="#020002">
          <HStack justifyContent={'space-between'}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'DINOffcPro-Black',
                color: 'grey',
              }}>
              Explore
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'DINOffcPro-Black',
                color: 'grey',
              }}>
              See more
            </Text>
          </HStack>
          <FlatlistComponent />
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
      {/* content */}
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomePage} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen name="Map" component={MapPage} />
            </Stack.Group>
            {/* <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Group> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
