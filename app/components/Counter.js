import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Counter(props) {
  const dispatch = useDispatch();
  const currentCount = useSelector(state => state.counter.count);
  return (
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
});


export default Counter;
