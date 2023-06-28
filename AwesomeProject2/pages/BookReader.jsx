/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function BookReader() {
  const route = useRoute();
  const {source} = route.params;
  const src = {
    uri: source,
    cache: true,
  };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

  return (
    <View style={styles.container}>
      <Pdf
        showsVerticalScrollIndicator={false}
        horizontal={true}
        source={src}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

// import * as React from 'react';

// import {SafeAreaView, useWindowDimensions} from 'react-native';
// import {Reader, ReaderProvider} from '@epubjs-react-native/core';
// import {useFileSystem} from '@epubjs-react-native/file-system'; // for Bare React Native project
// import {useNavigation, useRoute} from '@react-navigation/native';
// // import { useFileSystem } from '@epubjs-react-native/expo-file-system'; // for Expo project

// export default function BookReader() {
//   const {width, height} = useWindowDimensions();
//   const route = useRoute();
//   const {source} = route.params;
//   console.warn(source);
//   //   const navigation = useNavigation();
//   return (
//     <SafeAreaView>
//       <ReaderProvider>
//         <Reader
//           //   isLoading={e => {
//           //     console.warn(e);
//           //   }}
//           //   src={
//           //     'https://hadith.blob.core.windows.net/volumes/sunan-abu-dawud-vol2.epub'
//           //   }
//           src={
//             'https://hadith.s3.eu-north-1.amazonaws.com/sunanabudawudvol1.epub'
//           }
//           //   src={source}
//           width={width}
//           height={height}
//           fileSystem={useFileSystem}
//         />
//       </ReaderProvider>
//     </SafeAreaView>
//   );
// }
