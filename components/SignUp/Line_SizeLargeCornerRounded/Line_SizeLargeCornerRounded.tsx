import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Line_SizeLargeCornerRounded.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle2926?: string;
    root?: string;
  };
}
/* @figmaId 3544:42573 */
export const Line_SizeLargeCornerRounded: FC<Props> = memo(function Line_SizeLargeCornerRounded(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle2926 || ''} ${classes.rectangle2926}`}></div>
    </div>
  );
});
