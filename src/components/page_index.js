import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPages } from '../actions';


class PagesIndex extends Component {
	componentDidMount(){
		this.props.fetchPages();
	}

	renderPages() {
		return _.map(this.props.pages, page => {
			return (
				<li className="list-group-item" key={page.id}>
					<Link to={`/pages/${page.slug}`}>
						{page.title.rendered}
					</Link>
				</li>

				)
		})
	}

	render(){
		console.log(this.props.pages);


		return (
			<div>
				<div className="text-xs-right">
					
				</div>
				<h3>Pages</h3>
					<ul>
						{this.renderPages()}
					</ul>
			</div>	
			)
	}
}

function mapStateToProps(state) {
		return { pages: state.pages}
}

export default connect( mapStateToProps, { fetchPages })(PagesIndex);