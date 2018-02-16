import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

import keys from '../config/keys';
window.$ = window.jQuery = require('jquery')
const jQuery = window.jQuery;


class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      pages: [],
      dataRoute: `${keys.ROOT_URL}/pages`
    }


    jQuery(document).ready(function($){
     $(window).on( 'scroll', function(){
        if( $(this).scrollTop() > 150 ){
          $('.page_top_btn').addClass('is_show');
        } else {
          $('.page_top_btn').removeClass('is_show');
        }
      } );
      $('.page_top_btn').on('click',function(){
        $( 'body,html' ).stop(true, true).animate({ scrollTop: 0 }, 600);
      });

      $('.g_navi_button').on('click',function(){
        $(this).toggleClass('is_active');
        if( $(this).hasClass('is_active') ){
          $('.fa', this).removeClass('fa-bars').addClass('fa-times');
          $('.g_navi').fadeIn();
        } else {
          $('.g_navi').fadeOut();
          $('.fa', this).removeClass('fa-times').addClass('fa-bars');
        }

      });
      $('.g_navi').on('click',function(){
        $('.g_navi').fadeOut();
        $('.g_navi_button').removeClass('is_active');
        $('.g_navi_button .fa').removeClass('fa-times').addClass('fa-bars');
      })
    })


  }

componentDidMount(){
  fetch(this.state.dataRoute)
    .then(res => res.json())
    .then(pages => this.setState((prevState, props) => {
      return { pages: pages.map(this.mapPages)};
    }))
}

mapPages(page){
  return{
    id: page.id,
    title: page.title.rendered,
    slug: page.slug
  }
}

  render() {
    return (
        <div>

     <div className="g_nav_wrap" styles="">
      <button className="g_navi_button" type="button">Menu<i className="fa fa-bars" aria-hidden="true"></i></button>
      <nav className="g_navi" role="navigation" styles="display: none;">
      <ul>
        {this.state.pages.map((page) =>
            <li key={page.id} id={`menu-item-${page.id}`} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${page.id}`}>
                <Link to={`/pages/${page.slug}`}>
                  {page.title}
                </Link>
            </li> 
            
          )}
     </ul>
    </nav>
    </div>


      </div>
    );
  }
}

export default Menu;
