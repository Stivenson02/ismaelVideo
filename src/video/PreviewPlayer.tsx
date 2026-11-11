'use client';

import { Player } from '@remotion/player';
import { IsmaelOrigin } from './episodes/ismael-origin/Composition';

export function PreviewPlayer() {
  return (
    <Player
      component={IsmaelOrigin}
      durationInFrames={1200}
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
