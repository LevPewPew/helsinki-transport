import { css } from 'styled-components';

export const breakpoints = {
  smallScreen: '1200px',
  tablet: '768px',
  mobile: '520px',
  smallMobile: '375px'
};

export const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  
  return accumulator;
}, {});