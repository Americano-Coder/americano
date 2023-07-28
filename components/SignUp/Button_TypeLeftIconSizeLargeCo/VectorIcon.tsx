import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 6.5C13 7.67926 12.7095 8.76682 12.1283 9.7627C11.5471 10.7586 10.7586 11.5471 9.76273 12.1283C8.76685 12.7094 7.67929 13 6.50004 13C5.32078 13 4.23322 12.7094 3.23734 12.1283C2.24146 11.5471 1.45294 10.7586 0.87178 9.7627C0.290617 8.76682 3.50475e-05 7.67926 3.50475e-05 6.5C3.50475e-05 5.32075 0.290617 4.23319 0.87178 3.23731C1.45294 2.24143 2.24146 1.45291 3.23734 0.871749C4.23322 0.290586 5.32078 4.52995e-06 6.50004 4.52995e-06C7.67929 4.52995e-06 8.76685 0.290586 9.76273 0.871749C10.7586 1.45291 11.5471 2.24143 12.1283 3.23731C12.7095 4.23319 13 5.32075 13 6.5Z'
      fill='#82868C'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
