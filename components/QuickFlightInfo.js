let React = require("react");
const classNames = require("classnames");
let DetailFlightInfo = require("./DetailFlightInfo");
require("react-datetime");

// ES6
class QuickFlightInfo extends React.Component {

  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.makeTime = this.makeTime.bind(this);
    this.state = {
      expanded: false
    };
  }

  makeTime(time) { if (time == 0) { return "00"; } else { return time; } }

  render() {
    const QuickFlightclasses = classNames(
      "quick-flight--info",
      { "expanded": this.state.expanded },
      { "issearch--result": this.props.isSearchResult }
    );

    if (this.props.isSearchResult) {
      const fD = new Date(this.props.theData.localDepartureTime); let fDfull = <span><b>{this.makeTime(fD.getHours()) + ":" + this.makeTime(fD.getMinutes())}</b> {fD.getDate() + "/" + (fD.getMonth() + 1) + "/"}<small>{fD.getFullYear()}</small></span>;
      const fA = new Date(this.props.theData.localArrivalTime); let fAfull = <span><b>{this.makeTime(fA.getHours()) + ":" + this.makeTime(fA.getMinutes())}</b> {fA.getDate() + "/" + (fA.getMonth() + 1) + "/"}<small>{fA.getFullYear()}</small></span>;

      return (
        <div className={QuickFlightclasses}>
          <div className="quick--inner clearfix">
            <div className="quick--inner--section">
              <div className="flight--price">£{this.props.theData.prices.adult.value}</div>
            </div>
            <div className="quick--inner--section">
              <h3>{this.props.theData.arrivalAirport}</h3>
              <div className="flight--departure">From: {this.props.theData.departureAirport}</div>
            </div>
            <div className="quick--inner--section">
              <div className="flight--departure-time icon icon-flight">Departing: {fDfull}</div>
              <div className="flight--arrival-time icon icon-flight">Arriving: {fAfull}</div>
            </div>
            <div className="quick--inner--section">
              <a className="button" onClick={this._handleClick}>See Flight<span className="icon icon-angle-right"></span></a>
              <DetailFlightInfo data={this.props.theData} onClick={this._handleClick} />
            </div>
          </div>
          <div className="dark-overlay" onClick={this._handleClick}></div>
        </div>
      );
    } else {
      return (
      <div className={QuickFlightclasses}>
        <div className="quick--inner">
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
  }
  _handleClick() {
    const obj = this;
    obj.state.expanded === true ? (
      obj.setState({ expanded: false })
    ) : (
      obj.setState({ expanded: true })
    );
  }
}

module.exports = QuickFlightInfo;
