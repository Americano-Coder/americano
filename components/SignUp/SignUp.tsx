import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_TypeDefaultSizeLargeCor } from './Button_TypeDefaultSizeLargeCor/Button_TypeDefaultSizeLargeCor';
import { Button_TypeLeftIconSizeLargeCo } from './Button_TypeLeftIconSizeLargeCo/Button_TypeLeftIconSizeLargeCo';
import { CheckBox_CheckedFalseBorderFal } from './CheckBox_CheckedFalseBorderFal/CheckBox_CheckedFalseBorderFal';
import { Group3239Icon } from './Group3239Icon';
import { Group3269Icon } from './Group3269Icon';
import { IconColoredFacebook } from './IconColoredFacebook/IconColoredFacebook';
import { IconColoredGoogle } from './IconColoredGoogle/IconColoredGoogle';
import { IconColoredUKO } from './IconColoredUKO/IconColoredUKO';
import { Input_TypeDefaultCornerRacktan } from './Input_TypeDefaultCornerRacktan/Input_TypeDefaultCornerRacktan';
import { Line_SizeLargeCornerRounded } from './Line_SizeLargeCornerRounded/Line_SizeLargeCornerRounded';
import { Progress_SizeDefaultFill70Styl } from './Progress_SizeDefaultFill70Styl/Progress_SizeDefaultFill70Styl';
import classes from './SignUp.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  hide?: {
    textInput?: boolean;
    textInput2?: boolean;
    textInput3?: boolean;
  };
}
/* @figmaId 3627:45568 */
export const SignUp: FC<Props> = memo(function SignUp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes.doYouAlreadyHaveAnAccountLogIn}>
        <p className={classes.labelWrapper}>
          <span className={classes.label4}>Do you already have an account? </span>
          <span className={classes.label5}>Log in </span>
        </p>
      </div>
      <IconColoredUKO
        className={classes.iconColoredUKO}
        classes={{ group3239: classes.group3239 }}
        swap={{
          group3239: (
            <div className={classes.group3239}>
              <Group3239Icon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.forgotPassword}>Forgot Password?</div>
      <div className={classes.frame22}>
        <div className={classes.frame19}>
          <Button_TypeLeftIconSizeLargeCo
            className={classes.button2}
            swap={{
              iconFilledDot: (
                <IconColoredGoogle
                  className={classes.iconColoredGoogle}
                  classes={{ group3269: classes.group3269 }}
                  swap={{
                    group3269: (
                      <div className={classes.group3269}>
                        <Group3269Icon className={classes.icon2} />
                      </div>
                    ),
                  }}
                />
              ),
            }}
            text={{
              button: <div className={classes.button}>Sign in with Google</div>,
            }}
          />
          <Button_TypeLeftIconSizeLargeCo
            className={classes.button4}
            swap={{
              iconFilledDot: (
                <IconColoredFacebook
                  className={classes.iconColoredFacebook}
                  swap={{
                    vector: <VectorIcon className={classes.icon3} />,
                  }}
                />
              ),
            }}
            text={{
              button: <div className={classes.button3}>Sign in with Facebook</div>,
            }}
          />
        </div>
        <div className={classes.frame2}>
          <Line_SizeLargeCornerRounded className={classes.line} classes={{ rectangle2926: classes.rectangle2926 }} />
          <div className={classes.or}>Or</div>
          <Line_SizeLargeCornerRounded className={classes.line2} classes={{ rectangle2926: classes.rectangle29262 }} />
        </div>
        <div className={classes.frame20}>
          <Input_TypeDefaultCornerRacktan
            className={classes.input}
            classes={{ inputDefaultRacktangleTrueLarg: classes.inputDefaultRacktangleTrueLarg }}
            hide={{
              textInput: true,
            }}
            text={{
              label: <div className={classes.label}>Name</div>,
            }}
          />
          <Input_TypeDefaultCornerRacktan
            className={classes.input2}
            classes={{ inputDefaultRacktangleTrueLarg: classes.inputDefaultRacktangleTrueLarg2 }}
            hide={{
              textInput: true,
            }}
            text={{
              label: <div className={classes.label2}>Email</div>,
            }}
          />
        </div>
        <div className={classes.frame14}>
          <Input_TypeDefaultCornerRacktan
            className={classes.input3}
            classes={{ inputDefaultRacktangleTrueLarg: classes.inputDefaultRacktangleTrueLarg3 }}
            hide={{
              textInput: true,
            }}
            text={{
              label: <div className={classes.label3}>Password</div>,
            }}
          />
          <Progress_SizeDefaultFill70Styl
            className={classes.progress}
            classes={{ rectangle250: classes.rectangle250, rectangle239: classes.rectangle239 }}
          />
          <div className={classes.notBadButYouKnowYouCanDoItBett}>Not bad but you know you can do it better</div>
        </div>
        <div className={classes.frame21}>
          <CheckBox_CheckedFalseBorderFal
            className={classes.checkBox}
            classes={{ rectangle3036: classes.rectangle3036 }}
          />
          <div className={classes.iAgreeToTermsConditions}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label6}>I agree to </span>
              <span className={classes.label7}>terms &amp; conditions</span>
            </p>
          </div>
        </div>
        <Button_TypeDefaultSizeLargeCor
          className={classes.button6}
          text={{
            button: <div className={classes.button5}>Sign up fro free</div>,
          }}
        />
      </div>
    </div>
  );
});
