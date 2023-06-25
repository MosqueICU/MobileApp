import * as React from 'react';

import {SafeAreaView, useWindowDimensions} from 'react-native';
import {Reader, ReaderProvider} from '@epubjs-react-native/core';
import {useFileSystem} from '@epubjs-react-native/file-system'; // for Bare React Native project
import {useNavigation, useRoute} from '@react-navigation/native';
// import { useFileSystem } from '@epubjs-react-native/expo-file-system'; // for Expo project

export default function BookReader() {
  const {width, height} = useWindowDimensions();
  const route = useRoute();
  const {source} = route.params;
  console.warn(source);
  //   const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ReaderProvider>
        <Reader
        //   isLoading={e => {
        //     console.warn(e);
        //   }}
          //   src={
          //     'https://hadith.blob.core.windows.net/volumes/sunan-abu-dawud-vol2.epub'
          //   }
          src={source}
          width={width}
          height={height}
          fileSystem={useFileSystem}
        />
      </ReaderProvider>
    </SafeAreaView>
  );
}
