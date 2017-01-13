import React, { Component, PropTypes } from 'react';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

TextField.propTypes = {
    value: PropTypes.string,
};

export default TextField;
