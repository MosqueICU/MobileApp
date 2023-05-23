import React from 'react';
import Mapbox from '@rnmapbox/maps';
import {FillExtrusionLayer} from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoibW9zcXVlaWN1IiwiYSI6ImNsaHhhb3MxczBzN2YzZ3BnNHRkMW9rdHIifQ.csS9yZXj5lD3BIw-Kcw6TQ',
);

const App = () => {
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

export default App;
