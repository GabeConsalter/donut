import React, { Component } from 'react';
import { 
	ActivityIndicator,
	FlatList,
	StyleSheet
} from 'react-native';

export default class List extends Component {
	render() {
		const { loading, items } = this.props;

		if (loading) {
			return <ActivityIndicator/>; 
		} else {
			return (
				<FlatList
					style={styles.container}
					data={items}
					renderItem={({item}) => items.length > 0 ? item : <Text>{this.props.noItemsText}</Text>}
				/>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 8
	}
});