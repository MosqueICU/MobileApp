// import React from 'react';
import Mapbox from '@rnmapbox/maps';
import {FillExtrusionLayer} from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoibW9zcXVlaWN1IiwiYSI6ImNsaHhhb3MxczBzN2YzZ3BnNHRkMW9rdHIifQ.csS9yZXj5lD3BIw-Kcw6TQ',
);

const Map = () => {
  return (
    <Mapbox.MapView
      style={{flex: 1}}
      logoEnabled={false}
      compassEnabled={false}
      styleURL="mapbox://styles/mosqueicu/clhynlez2027u01prfsyn9et9">
      <Mapbox.Camera
        zoomLevel={17}
        pitch={60}
        animationMode={'flyTo'}
        animationDuration={2000}
        centerCoordinate={[-1.13, 52.632]} // eslint-disable-next-line prettier/prettier
      />
      <FillExtrusionLayer
        minZoomLevel={15}
        maxZoomLevel={30}
        style={{
          visibility: 'visible',
          fillExtrusionOpacity: 0.5,
          fillExtrusionColor: '#FFFFFF',
          fillExtrusionHeight: 20,
          fillExtrusionVerticalGradient: true,
          fillExtrusionOpacityTransition: {duration: 300, delay: 50},
        }}
        id="building"
      />
    </Mapbox.MapView>
  );
};

// export default App;

import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '25%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <Map />
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
      {/* content */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
