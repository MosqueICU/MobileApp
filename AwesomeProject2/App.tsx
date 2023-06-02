// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NativeBaseProvider} from 'native-base';
import CharityPage from './pages/CharityPage';
import HadithPage from './pages/HadithPage';
import HomePage from './pages/HomePage';
import QuranPage from './pages/QuranPage';
import {
  QuranSurahListenReciterCompileScreen,
  QuranSurahListenReciterScreen,
  QuranSurahListenScreen,
} from './pages/QuranPage.Surah.Listen';
import {QuranPageSurahScreen} from './pages/QuranPage.Surah';
import AudioPlayer from './pages/AudioPlayer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider>
        <BottomSheetModalProvider>
          <NavigationContainer>
            {/* BASIC PAGE ROUTES  */}
            <Stack.Navigator>
              <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomePage} />
              </Stack.Group>
              <Stack.Group
                screenOptions={{presentation: 'modal', headerShown: false}}>
                {/* <Stack.Screen name="Compass" component={CompassPage} />
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
              {/* BASIC PAGE ROUTES END */}
              {/* QURAN PAGE ROUTES */}
              <Stack.Group screenOptions={{headerShown: true}}>
                <Stack.Screen
                  name="QuranSurah"
                  component={QuranPageSurahScreen}
                />
                {/* each specific surah ^ */}

                {/* recitations block */}
                <Stack.Screen
                  name="QuranSurahListen"
                  component={QuranSurahListenScreen}
                />

                {/* recitations block */}
              </Stack.Group>
              <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen
                  name="QuranSurahListenReciterCompile"
                  component={QuranSurahListenReciterCompileScreen}
                />
              </Stack.Group>
              <Stack.Group
                screenOptions={{
                  presentation: 'modal',
                  headerShown: false,
                }}>
                <Stack.Screen
                  name="QuranSurahListenReciter"
                  component={QuranSurahListenReciterScreen}
                />
              </Stack.Group>
              {/* recitations block end */}

              {/* QURAN PAGE ROUTES END */}
              <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
