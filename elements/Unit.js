import React, { Component } from 'react';
import { 
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Unit extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.value}>{this.props.value}</Text>
				<Text style={styles.unit}>{this.props.unit}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	value: {
		fontSize: 24,
		fontWeight: 'bold',
		lineHeight: 24,
		textAlign: 'center',

	},
	unit: {
		fontSize: 10,
		fontWeight: '100',
		lineHeight: 10,
		textAlign: 'center'
	}
})