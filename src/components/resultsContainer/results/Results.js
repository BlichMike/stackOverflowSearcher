import React, { Component } from "react";
import ResultItem from "./resultItem/ResultItem";
import "./Results.css";

export default class Results extends Component {
    render() {
        function printResult(resultData, id) {
            return <ResultItem resultData={resultData} key={id} />;
        }
        return (
            <div className="results-container">
                {this.props.isSearching ? (
                    <div>searching!</div>
                ) : this.props.searchData.results !== null ? (
                    this.props.searchData.results.map(printResult)
                ) : (
                    ""
                )}
            </div>
        );
    }
}
