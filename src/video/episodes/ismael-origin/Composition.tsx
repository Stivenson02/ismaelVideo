import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { beats } from './story';
import styles from './Composition.module.css';

export const IsmaelOrigin: React.FC = () => {
  const frame = useCurrentFrame();
  const activeBeat = beats.find((beat) => frame >= beat.from && frame < beat.to) ?? beats[beats.length - 1];
  const beatFrame = frame - activeBeat.from;
  const fadeIn = interpolate(beatFrame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });
  const cameraDrift = interpolate(beatFrame, [0, activeBeat.to - activeBeat.from], [0, -3]);

  return (
    <AbsoluteFill className={styles.film}>
      <AbsoluteFill className={styles.sky} />
      <div className={styles.sun} />
      <div className={`${styles.ridge} ${styles.ridgeBack}`} />
      <div className={`${styles.ridge} ${styles.ridgeFront}`} />
      <div className={styles.ground} />
      <div className={styles.well} aria-hidden="true"><span /></div>
      <div className={styles.placeholderNote}>ESCENA EN CONSTRUCCIÓN · {activeBeat.art}</div>
      <div className={styles.copy} style={{ opacity: fadeIn, translate: `0px ${cameraDrift}px` }}>
        <p>{activeBeat.reference}</p>
        <h1>{activeBeat.narration}</h1>
      </div>
      <div className={styles.progress}><span style={{ width: `${(frame / 1200) * 100}%` }} /></div>
    </AbsoluteFill>
  );
};



