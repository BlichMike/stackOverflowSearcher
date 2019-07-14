import React, { Component } from "react";
import ResultItem from "./resultItem/ResultItem";
import "./Results.css";

export default class Results extends Component {
    render() {
        function printResult(resultData, id) {
            return <ResultItem resultData={resultData} key={id} />;
        }

        const printResultsData = () => {
            if (this.props.isSearching === true) {
                return <div>searching!</div>;
            } else if (this.props.searchError === true) {
                return <h1>oops, something in the search went wrong</h1>;
            } else if (this.props.searchData.results !== null) {
                return this.props.searchData.results.map(printResult);
            } else {
                return "";
            }
        };
        return <div className="results-container">{printResultsData()}</div>;
    }
}
