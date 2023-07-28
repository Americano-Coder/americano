import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Input_TypeDefaultCornerRacktan.module.css';

interface Props {
  className?: string;
  classes?: {
    inputDefaultRacktangleTrueLarg?: string;
    root?: string;
  };
  hide?: {
    textInput?: boolean;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 3590:43912 */
export const Input_TypeDefaultCornerRacktan: FC<Props> = memo(function Input_TypeDefaultCornerRacktan(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.inputDefaultRacktangleTrueLarg || ''} ${classes.inputDefaultRacktangleTrueLarg}`}
      >
        {!props.hide?.textInput && <div className={classes.textInput}>Text Input</div>}
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
    </div>
  );
});
