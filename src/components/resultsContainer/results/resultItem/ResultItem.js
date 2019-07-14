import React, { Component } from "react";
import "./ResultItem.css";

export default class ResultItem extends Component {
    render() {
        let resultData = this.props.resultData,
            owner = resultData.owner;

        return (
            <div className="res-container">
                <div className="res-left">
                    <img src={owner.profile_image} alt={owner.display_name} />
                    <div className="score-container">
                        <div className="score-value">{resultData.score}</div>
                        <div>Score</div>
                    </div>
                </div>
                <div className="res-right">
                    <a
                        href={resultData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        dangerouslySetInnerHTML={{
                            __html: resultData.title
                        }}
                    />

                    <div className="owner-data">
                        <div>
                            {formatDate(new Date(resultData.creation_date)) +
                                " | "}
                            &nbsp;|&nbsp;
                        </div>
                        <div>Reputation {owner.reputation}&nbsp;|&nbsp;</div>
                        <div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={owner.link}
                            >
                                {owner.display_name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );

        function formatDate(date) {
            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return monthNames[monthIndex] + " " + day + ", " + year;
        }
    }
}
