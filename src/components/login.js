// Create a LoginForm component that should contain username and password input fields, an h3 that says Log In, and a border. 
// Style the component using the default generated css file.
// Create a Navigation component that contains links styled like a navbar. The links don’t have to go anywhere. 
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                       
                        <form>
                            <h3 class="input">Log In</h3>
                            <div>
                                <input className="input" type="text" name="username" placeholder="username"/>
                            </div>
                            <div>
                                <input className="input" type="password" name="password" placeholder="password"/>
                            </div>
                            <div>
                                <input class="button" type="submit" value="Login" />
                            </div>
                        </form>
            </div>
        )
    }
}
