import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import AreaChartExample from './AreaChartExample';
import StackedAreaChartExample from './StackedAreaChartExample'
import BarChartExample from './BarChartExample'
import StackedBarChartExample from './StackedBarChartExample'
import LineChartExample from './LineChartExample'
import PieChartEample from './PieChartEample'
/**
 * #DtAdded 20191029 1120
 */
export default class Main extends Component {

  render() {
    return (
      <View style={{marginBottom:120}}>
        <View style={styles.view}>
          <Text style={[styles.textStyle,{color: '#8e52cc',}]}>Area Chart</Text>
          <AreaChartExample />
        </View>
        <View style={styles.view}>
          <Text style={[styles.textStyle,{color: '#8e52cc'}]}>Pie Chart</Text>
          <PieChartEample />
        </View>
        <View style={styles.view}>
          <Text style={[styles.textStyle,{color: '#8e52cc'}]}>Stacked Area Chart</Text>
          <StackedAreaChartExample />
        </View>
        <View style={styles.view}>
          <Text style={[styles.textStyle,{color: '#8e52cc'}]}>Bar Chart</Text>
          <BarChartExample />
        </View>
        <View style={styles.view}>
          <Text style={[styles.textStyle,{color: '#8e52cc'}]}>Stacked Bar Chart</Text>
          <StackedBarChartExample />
        </View>
        <View style={styles.view}>
          <Text style={[styles.textStyle,{color: '#8e52cc'}]}>Line Chart</Text>
          <LineChartExample />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    margin: 10,
    fontSize: 26,
    fontWeight:'bold'
  },
  view:{
      marginBottom:30
  }
});
