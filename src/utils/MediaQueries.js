import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  input: 400,
  height: 650,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em), (max-height: ${sizes.height / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
