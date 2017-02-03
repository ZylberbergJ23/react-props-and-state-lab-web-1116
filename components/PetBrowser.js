const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
	constructor(props) {
		super(props)
		this.createPets = this.createPets.bind(this)
	}

	createPets(){
		let petsProps = this.props.pets
		let adoptedPets = this.props.adoptedPets
		return petsProps.map( (petAttributes) => {
			return <Pet pet={petAttributes} onAdoptPet={this.props.onAdoptPet} isAdopted={adoptedPets.includes(petAttributes.id)}/>
		})
	}

  render() {
    return (
      <div className="ui cards">
        {this.createPets()}
      </div>
    );
  }
}

module.exports = PetBrowser;
