import { Composition, Folder } from 'remotion';
import { IsmaelOrigin } from './episodes/ismael-origin/Composition';
import { TOTAL_FRAMES } from './episodes/ismael-origin/story';
import { AbrahamAbimelech } from './episodes/abraham-abimelech/Composition';
import { TOTAL_FRAMES as ABRAHAM_FRAMES } from './episodes/abraham-abimelech/story';

export const RemotionRoot: React.FC = () => (
  <Folder name="Instagram">
    <Composition
      id="IsmaelOrigin"
      component={IsmaelOrigin}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="AbrahamAbimelech"
      component={AbrahamAbimelech}
      durationInFrames={ABRAHAM_FRAMES}
      fps={30}
      width={1080}
      height={1920}
    />
  </Folder>
);
