import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onPersonAdded(newPerson);
    }

    personDeletedHandler = (personId) => {
        this.props.onPersonRemoved(personId);
    }

    render () {
        const persons = this.props.persons ? this.props.persons.map(person => (
            <Person 
                key={person.id}
                name={person.name} 
                age={person.age} 
                clicked={() => this.personDeletedHandler(person.id)}/>
        )) : null
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {persons}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (person) => dispatch({type: actionTypes.ADD_PERSON, newPerson: person}),
        onPersonRemoved: (personId) => dispatch({type: actionTypes.REMOVE_PERSON, idOfPersonToRemove: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);