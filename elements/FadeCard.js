import React, { Component } from 'react';
import { Animated, Easing, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Progress from './Progress';

export default class FadeCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animBottom: new Animated.Value(-48)
		}
	};

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
			{ text, accentColor, actionIcon, children, dieIn, onActionPress } = this.props;

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

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		alignSelf: 'center',
		height: 64,
		width: '80%',
		borderRadius: 7,
		backgroundColor: '#FFF',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},

	innerContainer: {
		flex: 1,
	},

	textContainer: {
		padding: 16
	},

	button: {
		width: 64,
		height: '100%',
		borderBottomEndRadius: 7,
		borderTopEndRadius: 7,
		alignItems: 'center',
		justifyContent: 'center'
	}
});