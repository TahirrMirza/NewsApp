import React, {useRef} from 'react';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';

import {LayoutRectangle} from 'react-native';

function Youtube({visible, playing, url, layout}) {
  // const youtubeId = getYoutubeIdFromURL(url);
  const youtubePlayerRef = useRef(null);

  return (
    <YoutubePlayer
      ref={youtubePlayerRef}
      height={layout.height}
      width={layout.width}
      videoId={url}
      play={playing}
      onChangeState={event => {
        if (event === 'ended' && visible) {
          youtubePlayerRef?.current?.seekTo(0, true);
        }
      }}
      webViewProps={{
        injectedJavaScript: `
          var element = document.getElementsByClassName('container')[0];
          element.style.position = 'unset';
          true;
        `,
      }}
    />
  );
}

export default Youtube;
