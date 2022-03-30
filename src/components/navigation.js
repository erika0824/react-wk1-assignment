// Create a Navigation component that contains links styled like a navbar. The links don’t have to go anywhere. 
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div class="navContainer">
                <ul class="navMenu">
                    <li class="navLink"><a href="home.com">HOME</a></li>
                    <li class="navLink"><a href="home.com">ABOUT</a></li>
                    <li class="navLink"><a href="home.com">SHOP</a></li>
                    <li class="navLink"><a href="home.com">CONTACT</a></li>
                </ul>
            </div>
        )
    }
}
  