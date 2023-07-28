import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.5 10.3125H9.875V6.5625C9.875 6.06522 10.0725 5.58831 10.4242 5.23667C10.7758 4.88504 11.2527 4.6875 11.75 4.6875H13.625V0H9.875C8.38316 0 6.95242 0.592632 5.89752 1.64752C4.84263 2.70242 4.25 4.13316 4.25 5.625V10.3125H0.5V15H4.25V30H9.875V15H13.625L15.5 10.3125Z'
      fill='#1976D2'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
