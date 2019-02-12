import styled from 'styled-components';

export const VikingImage = styled.div.attrs(({ left, top, opacity, zIndex }) => ({
  style: {
    zIndex,
    opacity,
    transform: `translate(${left}px,${top}px)`,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;

  pointer-events: ${({ pointer }) => pointer ? 'auto' : 'none'};
  cursor: ${({ pointer }) => pointer ? 'pointer' : 'default'};

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ image }) => image});
`;
