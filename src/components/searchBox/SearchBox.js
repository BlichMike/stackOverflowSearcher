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
            <div className="">
                <div className="search-bar-txt">
                    What would you like to know?
                </div>

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
