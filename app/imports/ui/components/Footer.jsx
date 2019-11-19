import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
            Developed by: Jared Au, Nate Chu, Felix Hong, and Kade Shiroma<br />
            <a href="https://github.com/simply-savory">Github Organization</a><br />
            <a href="https://simply-savory.github.io/">
              Simply Savory Home Page</a>
          </div>
        </footer>
    );
  }
}

export default Footer;
