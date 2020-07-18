import { css } from 'styled-components';

export const breakpoints = {
  smallScreen: 1200,
  tablet: 768,
  mobile: 520,
  smallMobile: 375
};

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] + 'px'}) {
      ${css(...args)};
    }
  `;
  
  return accumulator;
}, {});