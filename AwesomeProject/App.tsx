// import React from 'react';
import Mapbox, {PointAnnotation} from '@rnmapbox/maps';
import {FillExtrusionLayer} from '@rnmapbox/maps';
import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

console.log('Screen Width: ', width);
console.log('Screen Height: ', height);
Mapbox.setAccessToken(
  'pk.eyJ1IjoibW9zcXVlaWN1IiwiYSI6ImNsaHhhb3MxczBzN2YzZ3BnNHRkMW9rdHIifQ.csS9yZXj5lD3BIw-Kcw6TQ',
);

const Map = () => {
  return (
    <Mapbox.MapView
      style={{flex: 1}}
      logoEnabled={false}
      compassEnabled={false}
      styleURL="mapbox://styles/mosqueicu/cli0jf8m402ff01qyffls6jdc/draft">
      <Mapbox.Camera
        zoomLevel={17}
        pitch={60}
        animationMode={'flyTo'}
        animationDuration={2000}
        centerCoordinate={[-1.13, 52.632]} // eslint-disable-next-line prettier/prettier
      />
      <View>
        <PointAnnotation id="markerId" coordinate={[-1.13, 52.632]}>
          <View style={styles.marker}>
            {/* Add your marker content here */}
            <Text>Awesome 🎉</Text>
          </View>
        </PointAnnotation>
      </View>
      <FillExtrusionLayer
        minZoomLevel={10}
        maxZoomLevel={30}
        style={{
          visibility: 'visible',
          fillExtrusionOpacity: 0.5,
          fillExtrusionHeight: 20,
          fillExtrusionOpacityTransition: {duration: 300, delay: 50},
        }}
        id="building"
      />
    </Mapbox.MapView>
  );
};

// export default App;

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['20%', '60%', '90%'], []);

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
          // eslint-disable-next-line react-native/no-inline-styles
          handleStyle={{
            backgroundColor: '#020002',
            shadowColor: '#020002',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          handleIndicatorStyle={{backgroundColor: '#565456'}}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{backgroundColor: 'black'}}>
            <View
              style={{
                borderRadius: 10,
                height: height / 10,
                borderColor: 'grey',
                borderWidth: 0.3,
                margin: 10,
              }}>
              <View style={{flex: 1, padding: 3}}>
                <Text style={{color: 'white'}}>Awesome 🎉</Text>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
      {/* content */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
