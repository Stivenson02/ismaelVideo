'use client';

import { Player } from '@remotion/player';
import { IsmaelOrigin } from './episodes/ismael-origin/Composition';
import { TOTAL_FRAMES } from './episodes/ismael-origin/story';

export function PreviewPlayer() {
  return (
    <Player
      component={IsmaelOrigin}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      compositionWidth={1080}
      compositionHeight={1920}
      initialFrame={900}
      controls
      loop
      style={{ width: '100%', height: '100%' }}
    />
  );
}
