import React, { Component } from "react";
import "./Card.css";
import PlaylistInfo from "./PlaylistInfo";
import VideoStats from "./VideoStats";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  toggle(e) {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <div
        className={`card ${this.state.clicked ? "clicked" : ""}`}
        onClick={(e) => this.toggle(e)}
      >
        <img
          src={`images/${this.props.card.thumb}`}
          alt={this.props.card.thumb}
          width={290}
          height={165}
        />
        {this.props.card.playlist ? (
          <PlaylistInfo numberOfVideos={this.props.card.numberOfVideos} />
        ) : null}
        <div className="lower-half">
          <div className="description">{this.props.card.description}</div>
          {this.props.card.playlist ? null : (
            <VideoStats
              duration={this.props.card.duration}
              views={this.props.card.views}
            />
          )}
          <img
            className="trainer"
            src={`images/${this.props.card.trainer}`}
            alt={this.props.card.trainer}
            width={28}
            height={28}
          />
        </div>
        {this.state.clicked ? (
          <div className="view-details">VIEW DETAILS</div>
        ) : null}
      </div>
    );
  }
}

export default Card;
