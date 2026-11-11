import { Composition, Folder } from 'remotion';
import { IsmaelOrigin } from './episodes/ismael-origin/Composition';
import { TOTAL_FRAMES } from './episodes/ismael-origin/story';

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
  </Folder>
);
