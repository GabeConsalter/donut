import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Label extends Component {
	render() {
		const { color, style, text } = this.props;

		return (
			<View style={[styles.container, style, {
				backgroundColor: color
			}]}>
				<Text style={styles.text}>{text}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 4,
		paddingVertical: 1,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},

	text: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: '#FFF',
		fontSize: 12,
	}
});