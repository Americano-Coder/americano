import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Progress_SizeDefaultFill70Styl.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle250?: string;
    rectangle239?: string;
    root?: string;
  };
}
/* @figmaId 3575:45403 */
export const Progress_SizeDefaultFill70Styl: FC<Props> = memo(function Progress_SizeDefaultFill70Styl(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle250 || ''} ${classes.rectangle250}`}></div>
      <div className={`${props.classes?.rectangle239 || ''} ${classes.rectangle239}`}></div>
    </div>
  );
});
