import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LoadData from './LoadData';

function Home(props) {
  const dispatch = useDispatch();
  const currentCount = useSelector(state => state.counter.count);
  const testState = useSelector(state => state.test);

  function setData() {
    dispatch({type: 'SET_DATA'});
    setTimeout(() => {
      dispatch({
        type: 'SET_DATA_COMMIT',
        payload: {
          data: {foo: 'bar', baz: 1},
        },
      });
    }, 5000);
  }

  function updateData() {
    dispatch({type: 'UPDATE_DATA'});
    setTimeout(() => {
      dispatch({type: 'UPDATE_DATA_COMMIT'});
    }, 2000);
  }

  function clearData() {
    dispatch({type: 'RESET_DATA'});
    setTimeout(() => {
      dispatch({type: 'RESET_DATA_COMMIT'});
    }, 2000);
  }

  return (
    <View style={{flexGrow: 1, marginHorizontal: 24}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch({type: 'INCREMENT'})}>
          <Text style={{fontSize: 24}}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 24}}>{currentCount}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch({type: 'DECREMENT'})}>
          <Text style={{fontSize: 24}}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.bigBtn} onPress={setData}>
        <Text style={{fontSize: 24}}>Set Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigBtn} onPress={updateData}>
        <Text style={{fontSize: 24}}>Update Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bigBtn} onPress={clearData}>
        <Text style={{fontSize: 24}}>Clear Data</Text>
      </TouchableOpacity>
      {testState.loading && (
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, marginRight: 12}}>Loading</Text>
          <ActivityIndicator animating />
        </View>
      )}
      {Object.keys(testState || {}).map(key => {
        return (
          <View
            key={key}
            style={{
              borderBottomWidth: 1,
              marginVertical: 12,
              paddingBottom: 5,
            }}>
            <Text>Key: `{key}`, </Text>
            <Text>Value: {JSON.stringify(testState[key])}</Text>
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
    marginVertical: 52,
  },
  btn: {
    backgroundColor: '#ddd',
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigBtn: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});

export default Home;
