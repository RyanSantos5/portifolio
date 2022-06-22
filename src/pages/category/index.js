import React, { Component } from 'react';

export default class Category extends Component {

    render() {
        console.log(this.props.match.params);
        const url = this.props.match.params;
        return (
            <div>
                <h1>{ url.url }</h1>
                
            </div>
        )
    }
}