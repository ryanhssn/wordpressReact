import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPage } from '../actions';

import Menu from './menu';

class PagesShow extends Component {
	componentDidMount() {
		const { slug } = this.props.match.params;
		this.props.fetchPage(slug);
		console.log(slug)
	}

	render() {
		const { page } = this.props;
		// console.log(page)
		// if(!page) {
		// 	return <div>Loading</div>
		// }

		return (
				<div>
					<Menu />
					<Link to="/pages/home">Back to Index</Link>
						<div className="title_wrap">
							<h1 className="post_title">{page.title.rendered}</h1>
						</div>
						<div className="post_content_area">
							<div className="post_content">
								<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
							</div>
						</div>

					

				</div>
			)
	}
}

function mapStateToProps({ pages }, ownProps ) {
	return { page: pages[ownProps.match.params.slug]}
}

export default connect(mapStateToProps, { fetchPage })(PagesShow);