import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.25 5.15625H5.4375V3.28125C5.4375 3.03261 5.53627 2.79415 5.71209 2.61834C5.8879 2.44252 6.12636 2.34375 6.375 2.34375H7.3125V0H5.4375C4.69158 0 3.97621 0.296316 3.44876 0.823762C2.92132 1.35121 2.625 2.06658 2.625 2.8125V5.15625H0.75V7.5H2.625V15H5.4375V7.5H7.3125L8.25 5.15625Z'
      fill='#1976D2'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
