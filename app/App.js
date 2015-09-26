var React = require('react');

var faviconUrl = require('./Assets/favicon.ico');
var Favicon = require('react-favicon');


//var Content = require('./Components/Content');
var Header =  require('./Components/Header');
var Olar =    require('./Components/Olar');


module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <Olar />
        <Favicon url={ faviconUrl }/>
      </div>
    )}

});
