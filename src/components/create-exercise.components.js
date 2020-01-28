import React, { Component } from 'react';

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            username: e.target.value
        });
    }

    render() {
        return (
            <div>
                <p>Create Components!</p>
            </div>
        )
    }
}