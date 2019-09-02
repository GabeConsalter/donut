import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ListItem extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={() => this.props.onPress()}>
				<View style={styles.left}>
					<Icon name={this.props.icon} size={32} />
				</View>
				<View style={styles.body}>
					<Text style={styles.text}>{this.props.text}</Text>
					<Text style={styles.subText}>{this.props.subText}</Text>
				</View>
				<View style={styles.right}>
					{this.props.right}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 3,
		height: '100%'
	},

	container: {
		flex: 1,
		marginHorizontal: 8,
		marginTop: 8,
		flexDirection: 'row',
		borderRadius: 7,
		padding: 8,
		backgroundColor: '#FFF',
		shadowColor: '#000',
		shadowOpacity: .25,
		shadowOffset: {
			width: 1,
			height: 1
		},
		elevation: 4
	},

	left: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},

	right: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},

	rightText: {
		fontSize: 10,
		textAlign: 'center'
	},

	subText: {
		fontSize: 10,
		color: '#828282'
	},

	text: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});