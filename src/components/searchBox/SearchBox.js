import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: "" };
        this.searchInput = null;
    }

    onInputChange = e => {
        this.setState({ searchInput: e.target.value });
    };

    render() {
        return (
            <div>
                What would you like to know?
                <input
                    className="search-bar"
                    placeholder="Search..."
                    value={this.state.searchInput}
                    onChange={this.onInputChange}
                />
                <button
                    className="search-btn"
                    disabled={this.state.searchInput.length === 0}
                    onClick={e => this.props.onSearch(this.state.searchInput)}
                >
                    Search
                </button>
            </div>
        );
    }
}
