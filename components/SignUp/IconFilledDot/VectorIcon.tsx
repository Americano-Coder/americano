import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26 13C26 15.3585 25.4189 17.5336 24.2565 19.5254C23.0942 21.5171 21.5172 23.0942 19.5254 24.2565C17.5337 25.4188 15.3585 26 13 26C10.6415 26 8.4664 25.4188 6.47464 24.2565C4.48289 23.0942 2.90585 21.5171 1.74352 19.5254C0.581198 17.5336 3.50475e-05 15.3585 3.50475e-05 13C3.50475e-05 10.6415 0.581198 8.46637 1.74352 6.47461C2.90585 4.48286 4.48289 2.90582 6.47464 1.74349C8.4664 0.581168 10.6415 4.52995e-06 13 4.52995e-06C15.3585 4.52995e-06 17.5337 0.581168 19.5254 1.74349C21.5172 2.90582 23.0942 4.48286 24.2565 6.47461C25.4189 8.46637 26 10.6415 26 13Z'
      fill='#82868C'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
