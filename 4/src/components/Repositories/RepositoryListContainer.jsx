import React from 'react';
import { FlatList } from 'react-native';
import { Link } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import Filter from '../Filter';

export class RepositoryListContainer extends React.Component {

	renderHeader = () => {
		return (
			< Filter />
		)
	}

	render() {
		const repositoryNodes = this.props.repositories
			? this.props.repositories.edges.map((edge) => edge.node)
			: [];

		return (
			<FlatList
				style={{ flexWrap: 'nowrap' }}
				data={repositoryNodes}
				ItemSeparatorComponent={< ItemSeparator />}
				ListHeaderComponent={this.renderHeader}
				keyExtractor={item => item.id}
				renderItem={({ item }) =>
					<Link to={`/${item.id}`}>
						<RepositoryItem
							item={item}
						/>
					</Link>
				}
				onEndReached={this.props.onEndReach}
				onEndReachedThreshold={0.2}
			/>

		);
	}
}

export default RepositoryListContainer;