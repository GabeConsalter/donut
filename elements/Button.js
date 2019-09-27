import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { color, text } = this.props;

		return (
			<TouchableOpacity
				style={[styles.container, { backgroundColor: color }]}
				onPress={() => this.props.onPress()}>
				<Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 52,
		paddingVertical: 4,
		paddingHorizontal: 16,
		justifyContent: 'center'
	},

	text: {
		color: '#FFF',
		textAlign: 'center'
	}
});