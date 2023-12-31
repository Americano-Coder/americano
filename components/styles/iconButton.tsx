import { styled } from '@nextui-org/react';

export const IconButton = styled('button', {
    background: 'transparent',
    border: 'none',
    padding: 0,
    width: '28px',
    margin: '0 10px',
    dflex: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease 0s, transform 0.25s ease 0s',
    svg: {
        size: '100%',
        padding: '4px',
        transition: 'transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms',
    },
    '&:hover': {
        opacity: 0.8
    },
});
