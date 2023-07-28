import React from "react";

export const ThreeDotsIcon = ({
                                  fill = "#808080",
                                  size,
                                  height,
                                  width,
                                  label,
                                  className,
                                  ...props
                              }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            className={className}
            {...props}
        >
            <g transform="translate(-22 -6)">
                <circle cx="29" cy="8" r="2" fill={fill} />
                <circle cx="29" cy="14" r="2" fill={fill} />
                <circle cx="29" cy="20" r="2" fill={fill} />
            </g>
        </svg>
    );
};
