// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import HomePage from './pages/HomePage';
import {NativeBaseProvider} from 'native-base';
import QuranPage from './pages/QuranPage';
import {
  QuranSurahListenScreen,
  QuranSurahScreen,
} from './pages/QuranPage.Surah';
import HadithPage from './pages/HadithPage';
import CharityPage from './pages/CharityPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomePage} />
              </Stack.Group>
              {/* <Stack.Screen name="Home" component={HomePage} /> */}
              <Stack.Group
                screenOptions={{presentation: 'modal', headerShown: false}}>
                {/* <Stack.Screen name="Hadith" component={HadithPage} />
                <Stack.Screen name="Compass" component={CompassPage} />
                <Stack.Screen name="Dua" component={DuaPage} />
                <Stack.Screen name="Charity" component={CharityPage} />
                <Stack.Screen name="Fasting" component={FastingPage} />
                <Stack.Screen name="Prayer" component={PrayerPage} />
                <Stack.Screen name="Thikr" component={ThikrPage} />
                <Stack.Screen name="Educate" component={EducatePage} /> */}
                <Stack.Screen name="Quran" component={QuranPage} />
                <Stack.Screen name="Hadith" component={HadithPage} />
                <Stack.Screen name="Charity" component={CharityPage} />
              </Stack.Group>
              <Stack.Group screenOptions={{headerShown: true}}>
                <Stack.Screen name="QuranSurah" component={QuranSurahScreen} />
                <Stack.Screen
                  name="QuranSurahListen"
                  component={QuranSurahListenScreen}
                />
                <Stack.Screen
                  name="QuranSurahRead"
                  component={QuranSurahListenScreen}
                />
                <Stack.Screen
                  name="HadithRandom"
                  component={QuranSurahScreen}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
