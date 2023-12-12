import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      date,
      venue,
      result,
    } = latestMatch
    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-logo-details">
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest-date">{date}</p>
              <p className="latest-venue">{venue}</p>
              <p className="latest-status">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-match-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Second Innings</p>
              <p className="latest-match-details-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man of The Match</p>
              <p className="latest-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="latest-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
