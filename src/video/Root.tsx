import { Composition, Folder } from 'remotion';
import { IsmaelOrigin } from './episodes/ismael-origin/Composition';

export const RemotionRoot: React.FC = () => (
  <Folder name="Instagram">
    <Composition
      id="IsmaelOrigin"
      component={IsmaelOrigin}
      durationInFrames={1200}
      fps={30}
      width={1080}
      height={1920}
    />
  </Folder>
);
