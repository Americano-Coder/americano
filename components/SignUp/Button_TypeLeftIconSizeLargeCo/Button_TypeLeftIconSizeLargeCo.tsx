import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconFilledDot } from '../IconFilledDot/IconFilledDot';
import classes from './Button_TypeLeftIconSizeLargeCo.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    iconFilledDot?: ReactNode;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 3611:44014 */
export const Button_TypeLeftIconSizeLargeCo: FC<Props> = memo(function Button_TypeLeftIconSizeLargeCo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.iconFilledDot || (
        <IconFilledDot
          className={classes.iconFilledDot}
          classes={{ vector: classes.vector }}
          swap={{
            vector: (
              <div className={classes.vector}>
                <VectorIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      )}
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});
