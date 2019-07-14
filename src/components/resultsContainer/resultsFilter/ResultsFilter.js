import React, { Component } from "react";
import "./ResultsFilter.css";

export default class ResultsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "", sortby: "" };
    }
    onInputChange = e => {
        let query = e.target.value;
        this.setState({ query });
        this.props.onFilter(query);
    };
    onSort = e => {
        let sortby = e.target.value;
        this.setState({ sortby });
        this.props.onSort(sortby);
    };

    render() {
        return (
            <div className="filter-container">
                Find in this page &nbsp;
                <input
                    type="text"
                    placeholder="Seach..."
                    value={this.state.query}
                    onChange={this.onInputChange}
                />
                Sort By{" "}
                <select onChange={this.onSort} defaultValue="default">
                    <option value="default" hidden>
                        Default
                    </option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="most-viewed">Most Viewed</option>
                    <option value="least-viewed">Least Viewed</option>
                </select>
            </div>
        );
    }
}
