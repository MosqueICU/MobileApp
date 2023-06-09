// In App.js in a new project

import * as React from 'react';

import MapPage from './pages/MapPage';
import HadithPage from './pages/HadithPage';
import CompassPage from './pages/CompassPage';
import DuaPage from './pages/DuaPage';
import CharityPage from './pages/CharityPage';
import FastingPage from './pages/FastingPage';
import PrayerPage from './pages/PrayerPage';
import ThikrPage from './pages/ThikrPage';
import EducatePage from './pages/EducatePage';
import QuranPage from './pages/QuranPage';
import HomePage from './pages/HomePage';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
