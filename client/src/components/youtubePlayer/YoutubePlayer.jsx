import React from 'react';
import PropTypes from 'prop-types';
import '../youtubePlayer/youtubePlayer.css';
const YoutubePlayer = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubePlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubePlayer;
