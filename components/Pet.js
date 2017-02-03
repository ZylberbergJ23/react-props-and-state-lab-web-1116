const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.adopted = this.adopted.bind(this)
    this.handleAdoption = this.handleAdoption.bind(this)
    this.state = {isAdopted: this.props.isAdopted}
  }

  adopted() {
    if (this.state.isAdopted) {
      return (<button className="ui disabled button">Already adopted</button>)
    }
    else {
     return (<button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>) 
     // dont put () to call it because its premature so without it waits for click
    }
  }

  handleAdoption() {
    this.setState({isAdopted: true})
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adopted()}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
