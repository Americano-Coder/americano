import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckBox_CheckedFalseBorderFal.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle3036?: string;
    root?: string;
  };
}
/* @figmaId 3554:45361 */
export const CheckBox_CheckedFalseBorderFal: FC<Props> = memo(function CheckBox_CheckedFalseBorderFal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle3036 || ''} ${classes.rectangle3036}`}></div>
    </div>
  );
});
