import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./components/searchBox/SearchBox";
import ResultsFilter from "./components/resultsContainer/resultsFilter/ResultsFilter";
import Results from "./components/resultsContainer/results/Results";
import resultsHelper from "./helpers/resultsHelper";

class App extends Component {
    constructor(props) {
        super(props);
        this.allResults = null;
        this.state = {
            searchData: { input: "", results: null },
            isSearching: false
        };
    }

    handleSearch = input => {
        this.setState({ isSearching: true });

        resultsHelper.getData(input).then(result => {
            let searchData = this.state.searchData;
            searchData.results = result.items;
            this.allResults = result.items;
            this.setState({ isSearching: false, searchData });
        });
    };

    handleFilterResults = q => {
        let searchData = this.state.searchData;
        searchData.results = this.allResults.filter(res => {
            return res.title.toLowerCase().includes(q.toLowerCase());
        });
        this.setState(searchData);
    };

    handleSortResults = sortby => {
        let searchData = this.state.searchData;
        searchData.results = resultsHelper.sortBysortKey(
            searchData.results,
            sortby
        );

        this.setState(searchData);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <SearchBox
                        onSearch={this.handleSearch}
                        searchInput={this.state.searchData.input}
                    />
                </header>
                <div className="main-container">
                    {this.state.searchData.results !== null ? (
                        <ResultsFilter
                            searchData={this.searchData}
                            onFilter={this.handleFilterResults}
                            onSort={this.handleSortResults}
                        />
                    ) : (
                        ""
                    )}
                    <Results
                        searchData={this.state.searchData}
                        isSearching={this.state.isSearching}
                    />
                </div>
            </div>
        );
    }
}

export default App;
