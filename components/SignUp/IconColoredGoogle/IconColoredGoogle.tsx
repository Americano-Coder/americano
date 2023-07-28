import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Group3269Icon } from './Group3269Icon';
import classes from './IconColoredGoogle.module.css';

interface Props {
  className?: string;
  classes?: {
    group3269?: string;
    root?: string;
  };
  swap?: {
    group3269?: ReactNode;
  };
}
/* @figmaId 3627:44888 */
export const IconColoredGoogle: FC<Props> = memo(function IconColoredGoogle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group3269 || ''} ${classes.group3269}`}>
        {props.swap?.group3269 || <Group3269Icon className={classes.icon} />}
      </div>
    </div>
  );
});
