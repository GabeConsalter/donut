import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

/**
 * @class
 * @classdesc Progress. Available props are:
 * - {Number} [timing] Life time in seconds
 * - {string} [color] Bar color
 *
 * @memberOf Element
 * @extends {Component}
 *
 * @author gabriel.consalter
 * @since 1.0.0
 */
export default class Progress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animWidth: new Animated.Value(100)
		};
	}

	componentDidMount() {
		Animated.timing(this.state.animWidth, {
			toValue: 0,
			duration: this.props.timing * 1000,
			easing: Easing.linear
		}).start();
	}

	render() {
		const { animWidth } = this.state,
			{ color } = this.props;

		return (
			<Animated.View style={[styles.container, {
				backgroundColor: color,
				width: animWidth.interpolate({
					inputRange: [0, 1],
					outputRange: ['0%', '1%']
				})
			}]} />
		);
	}
}

/**
 * Type validation
 */
Progress.propTypes = {
	color: PropTypes.string.isRequired,
	timing: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		borderTopStartRadius: 7,
		height: 5,
		left: 0,
		opacity: .5,
		position: 'absolute',
		top: 1.5
	}
});