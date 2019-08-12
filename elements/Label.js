import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * @class
 * @classdesc Progress. Available props are:
 * - {string} [color] Container color
 * - {Object} [style] Additional style
 * - {string} [text] Text to show
 *
 * @memberOf Element
 * @extends {Component}
 *
 * @author gabriel.consalter
 * @since 1.0.0
 */
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

/**
 * Type validation
 */
Label.propTypes = {
	color: PropTypes.string.isRequired,
	style: PropTypes.object,
	text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderRadius: 4,
		justifyContent: 'center',
		paddingHorizontal: 4,
		paddingVertical: 1
	},

	text: {
		color: '#FFF',
		fontSize: 12,
		textAlign: 'center',
		textAlignVertical: 'center'
	}
});