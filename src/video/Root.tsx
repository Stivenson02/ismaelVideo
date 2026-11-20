import { Composition, Folder, Still } from 'remotion';
import { IsmaelOrigin } from './episodes/ismael-origin/Composition';
import { TOTAL_FRAMES } from './episodes/ismael-origin/story';
import { AbrahamAbimelech } from './episodes/abraham-abimelech/Composition';
import { TOTAL_FRAMES as ABRAHAM_FRAMES } from './episodes/abraham-abimelech/story';
import { JudaTamar } from './episodes/juda-tamar/Composition';
import { JudaTamarCover } from './episodes/juda-tamar/Cover';
import { TOTAL_FRAMES as JUDA_TAMAR_FRAMES } from './episodes/juda-tamar/story';

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
    <Composition
      id="JudaTamar"
      component={JudaTamar}
      defaultProps={{ review: true }}
      durationInFrames={JUDA_TAMAR_FRAMES}
      fps={30}
      width={1080}
      height={1920}
    />
    {/* Misma composición sin la etiqueta de animatic: es la que se sube a Instagram y YouTube Shorts. */}
    <Composition
      id="JudaTamarPublicacion"
      component={JudaTamar}
      defaultProps={{ review: false }}
      durationInFrames={JUDA_TAMAR_FRAMES}
      fps={30}
      width={1080}
      height={1920}
    />
    <Still id="JudaTamarCover" component={JudaTamarCover} width={1080} height={1920} />
  </Folder>
);
