import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface AppProps {
  child: ReactNode
}

function App(props: AppProps): JSX.Element {

  return (
    <Animated.View
      style={styles.vAnimated}
      key={'uniqueKey'}
      entering={FadeIn.duration(400)}
      exiting={FadeOut.duration(400)}
    >
      {props.child}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  vAnimated: {
    flex:1,
    backgroundColor:'blue'
  }
});

export default App;
