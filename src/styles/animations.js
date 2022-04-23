import { css, keyframes } from 'styled-components'

const fadeInkeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

const translateYToKeyframes = (initialPosition = '0', endPosition = '0') => keyframes`
  from {
    transform:  translateY(${initialPosition});
  }
  to {
    transform: translateY(${endPosition});
  }
`
const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
     animation: ${time} ${fadeInkeyFrames} ${type};
  `
}

const translateYTo = ({ initialPosition = 0, endPosition = 0, time = '1s', type = 'ease', delay = '0s' } = {}) => css`
  animation: ${time} ${translateYToKeyframes(initialPosition, endPosition)} ${type} ${delay};
`

export {
  fadeIn,
  translateYTo
}
