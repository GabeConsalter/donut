import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Progress from './Progress';

/**
 * @class
 * @classdesc Progress. Available props are:
 * - {string} [accentColor] Accent color
 * - {string} [actionIcon] Action icon name
 * - {Component<JSX>} [children] Children component
 * - {Number} [dieIn] Time to die in seconds
 * - {Function} [onActionPress] Function called when action button is pressed
 * - {string} [text] Text message
 *
 * @memberOf Element
 * @extends {Component}
 *
 * @author gabriel.consalter
 * @since 1.0.0
 */
export default class FadeCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animBottom: new Animated.Value(-48)
		};
	}

	componentDidMount() {
		Animated.timing(
			this.state.animBottom,
			{
				toValue: 32,
				duration: 500,
				easing: Easing.bounce
			}
		).start();

		if (this.props.dieIn) {
			setTimeout(() => Animated.timing(
				this.state.animBottom,
				{
					toValue: -100,
					duration: 500,
					easing: Easing.bounce
				}
			).start(), this.props.dieIn * 1000);
		}
	}

	render() {
		const { animBottom } = this.state,
			{ accentColor, actionIcon, children, dieIn, onActionPress, text } = this.props;

		return (
			<Animated.View style={[styles.container, { bottom: animBottom }]}>
				<View style={styles.innerContainer}>
					<Progress timing={dieIn} color={accentColor} />
					<View style={styles.textContainer}>
						<Text>{text}</Text>
					</View>
				</View>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: accentColor }]}
					onPress={() => onActionPress()}>
					<Icon color='#FFF' size={24} name={actionIcon} />
				</TouchableOpacity>
				{children}
			</Animated.View>
		);
	}
}

/**
 * Type validation
 */
FadeCard.propTypes = {
	accentColor: PropTypes.string.isRequired,
	actionIcon: PropTypes.string.isRequired,
	children: PropTypes.object,
	dieIn: PropTypes.number.isRequired,
	onActionPress: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderBottomEndRadius: 7,
		borderTopEndRadius: 7,
		justifyContent: 'center',
		width: 64
	},

	container: {
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#FFF',
		borderRadius: 7,
		elevation: 5,
		flexDirection: 'row',
		height: 64,
		justifyContent: 'space-between',
		position: 'absolute',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		width: '80%'
	},

	innerContainer: {
		flex: 1
	},

	textContainer: {
		padding: 16
	}
});