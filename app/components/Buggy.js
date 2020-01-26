import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Buggy(props) {
  const dispatch = useDispatch();
  const buggyState = useSelector(state => state.buggy);
  const {loading, data} = buggyState;

  function setData() {
    dispatch({type: 'SET_DATA'});
    setTimeout(() => {
      dispatch({
        type: 'SET_DATA_COMMIT',
        payload: {
          data: {foo: 'bar', baz: 1},
        },
      });
    }, 1000);
  }

  function updateData() {
    dispatch({type: 'UPDATE_DATA'});
    setTimeout(() => {
      dispatch({type: 'UPDATE_DATA_COMMIT'});
    }, 1000);
  }

  function clearData() {
    dispatch({type: 'RESET_DATA'});
    setTimeout(() => {
      dispatch({type: 'RESET_DATA_COMMIT'});
    }, 1000);
  }

  return (
    <>
      <TouchableOpacity
        disabled={loading}
        style={styles.bigBtn}
        onPress={setData}>
        <Text style={{fontSize: 24}}>Set Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={loading}
        style={styles.bigBtn}
        onPress={updateData}>
        <Text style={{fontSize: 24}}>Update Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={loading}
        style={styles.bigBtn}
        onPress={clearData}>
        <Text style={{fontSize: 24}}>Clear Data</Text>
      </TouchableOpacity>
      {loading && (
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, marginRight: 12}}>Loading</Text>
          <ActivityIndicator animating />
        </View>
      )}
      {Object.keys(buggyState || {}).map(key => {
        return (
          <View
            key={key}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginVertical: 12,
              paddingBottom: 5,
            }}>
            <Text>Key: <Text style={{fontWeight: 'bold'}}>{key}</Text></Text>
            <Text>Value: {JSON.stringify(buggyState[key])}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  bigBtn: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});

export default Buggy;
