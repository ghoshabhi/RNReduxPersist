import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function LoadData(props) {
  const dispatch = useDispatch();
  const testState = useSelector(state => state.test);

  return (
    <View style={styles.container}>
      {Object.keys(testState || {}).forEach(key => {
        return (
          <View>
            <Text>Key: {key}</Text>
            <Text>Value: {testState[key]}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 52,
  },
  btn: {
    marginHorizontal: 24,
    backgroundColor: '#ddd',
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadData;
