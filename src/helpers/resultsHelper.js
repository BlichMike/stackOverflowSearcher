var resultsHelper = (function resHelper() {
    const searchParams = {
            page: 1,
            order: "desc",
            sort: "votes",
            filter: "default",
            intitle: ""
        },
        searchApi = "https://api.stackexchange.com/2.2/search",
        reducer = (prev, curr) => {
            return `${prev}&${curr}=${searchParams[curr]}`;
        },
        sortMap = {
            newest: { field: "creation_date", type: "asc" },
            oldest: { field: "creation_date", type: "desc" },
            "most-viewed": { field: "view_count", type: "desc" },
            "least-viewed": { field: "view_count", type: "asc" }
        };

    let api = {};
    api = { getData, sortBySortKey };
    return api;

    // mapping and sorting from sort key(in ui) to sort field (on object) and type (asc, desc)
    function sortBySortKey(arr, sortKey) {
        let field = sortMap[sortKey].field,
            sortType = sortMap[sortKey].type;

        return arr.sort((a, b) => {
            if (sortType === "asc") {
                return a[field] > b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? 1 : -1;
            }
        });
    }

    // building the query for the api request
    function buildQuery(searchApi, searchParams) {
        let restApi = searchApi;
        restApi += Object.keys(searchParams).reduce(
            reducer,
            "?site=stackoverflow"
        );

        return restApi;
    }

    // function to get data from server
    function getData(searchInput) {
        searchParams.intitle = searchInput;
        return fetch(buildQuery(searchApi, searchParams)).then(data => {
            if (data.ok) {
                return data.json();
            }
            throw Error(`Request rejected with status ${data.status}`);
        });
    }
})();
export default resultsHelper;
