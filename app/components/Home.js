import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Buggy from './Buggy';
import Counter from './Counter';

function Home(props) {
  return (
    <View style={{flexGrow: 1, marginHorizontal: 24}}>
      <Counter />
      <Buggy />
    </View>
  );
}

export default Home;
