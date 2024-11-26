import { StyleSheet } from "react-native";
import { View } from "react-native";


const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
	separator: {
		height: 10,
		backgroundColor: '#e1e4e8',
	},
});

export default ItemSeparator