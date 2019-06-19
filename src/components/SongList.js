import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    const { songs } = this.props;
    return songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

// reducers를 연결하기
export default connect(mapStateToProps)(SongList);
