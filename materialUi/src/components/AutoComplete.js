import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class AutoCompleteExampleSimple extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			dataSource : []
		};
	}
	handleUpdateInput = (v) =>{
		this.setState({
			dataSource:[
				v,
				v+v,
				v+v+v
			]
		})
	}
	render(){
		const colors = [
		  'Red',
		  'Orange',
		  'Yellow',
		  'Green',
		  'Blue',
		  'Purple',
		  'Black',
		  'White',
		];

		const fruit = [
		  'Apple', 'Apricot', 'Avocado',
		  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
		  'Boysenberry', 'Blood Orange',
		  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
		  'Coconut', 'Cranberry', 'Clementine',
		  'Damson', 'Date', 'Dragonfruit', 'Durian',
		  'Elderberry',
		  'Feijoa', 'Fig',
		  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
		  'Honeydew', 'Huckleberry',
		  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
		  'Kiwi fruit', 'Kumquat',
		  'Lemon', 'Lime', 'Loquat', 'Lychee',
		  'Nectarine',
		  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
		  'Olive', 'Orange',
		  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
		  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
		  'Quince',
		  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
		  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
		  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
		  'Ugli fruit',
		  'Watermelon',
		];
		return(
			<div>
				<h1>AutoComplete</h1>
				<AutoComplete
					hintText = "Type anything"
					dataSource = {this.state.dataSource}
					onUpdateInput = {this.handleUpdateInput}
					floatingLabelText = "Your Name"
				/>
				<AutoComplete
					hintText = "Type anything"
					dataSource = {this.state.dataSource}
					onUpdateInput = {this.handleUpdateInput}
					floatingLabelText = "Hello World"
					fullWidth = {true}
				/>
				<AutoComplete
				 floatingLabelText="Type 'r', case insensitive"
				 filter = {AutoComplete.caseInsensitiveFilter}
				 dataSource = {colors}
				/>
				<AutoComplete 
					floatingLabelText = "Type 'path', fuzzy search"
					filter = {AutoComplete.fuzzyFilter}
					dataSource = {fruit}
					maxSearchResults = {7}
				/>
			</div>
		)
	}
}