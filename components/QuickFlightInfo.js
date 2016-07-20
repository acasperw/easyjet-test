var React = require('react');
var classNames = require('classnames');
var DetailFlightInfo = require('./DetailFlightInfo');
require('react-datetime');

// ES6
class QuickFlightInfo extends React.Component {

  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      expanded: false
    };
  }

  render() {

    const QuickFlightclasses = classNames(
      'quick-flight--info',
      {'expanded': this.state.expanded}
    );

    return(
      <div className={QuickFlightclasses}>
        <div>
          <h3>{this.props.theData.arrivalAirport}</h3>
          <div className="flight--departure">From: {this.props.theData.departureAirport}</div>
          <div className="flight--price">£{this.props.theData.prices.adult.value}</div>
          <a className="button" onClick={this._handleClick}>See Flight<span className="icon icon-angle-right"></span></a>
          <DetailFlightInfo data={this.props.theData} onClick={this._handleClick} />
        </div>
        <div className="dark-overlay" onClick={this._handleClick}></div>
      </div>

    );
  }
  _handleClick() {
    const obj = this;
    obj.state.expanded === true ? (
      obj.setState({expanded: false})
    ) : (
      obj.setState({expanded: true})
    );
  }
};

module.exports = QuickFlightInfo;