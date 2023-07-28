import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Group3239Icon } from './Group3239Icon';
import classes from './IconColoredUKO.module.css';

interface Props {
  className?: string;
  classes?: {
    group3239?: string;
    root?: string;
  };
  swap?: {
    group3239?: ReactNode;
  };
}
/* @figmaId 3610:43904 */
export const IconColoredUKO: FC<Props> = memo(function IconColoredUKO(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group3239 || ''} ${classes.group3239}`}>
        {props.swap?.group3239 || <Group3239Icon className={classes.icon} />}
      </div>
    </div>
  );
});
