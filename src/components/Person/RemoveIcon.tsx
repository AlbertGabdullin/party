import React, {MouseEvent} from 'react';

interface IconProps {
  width?: number;
  height?: number;
  opacity?: number;
  color?: string;
  background?: string;
  iconColor?: string;
  onClick?: (e: MouseEvent) => void;
}

const RemoveIcon = ({
  width = 30,
  height = 30,
  opacity = 0.75,
  background = 'white',
  iconColor = '#000',
  onClick,
  ...rest
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...rest}
    >
      <path
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z"
        fill={background}
        fillOpacity={opacity}
      />
      <path
        d="M20 11.0071L18.9929 10L15 13.9929L11.0071 10L10 11.0071L13.9929 15L10 18.9929L11.0071 20L15 16.0071L18.9929 20L20 18.9929L16.0071 15L20 11.0071Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default RemoveIcon;
