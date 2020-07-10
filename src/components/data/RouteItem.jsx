import React from 'react';
import { StopsList } from 'components';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

const Root = styled.li`
  details {
    summary {
      cursor: pointer;
      
      &::-webkit-details-marker {
        display: none;
      }

      &:focus {
        outline: 0;
      }

      p {
        font-weight: bold;
      }

      .icon {
        text-align: center;
      }
    }
  }
`;

const RouteItem = ({ item }) => (
  <Root>
    <details>
      <summary>
        <p>{item.shortName}, {item.longName} - {item.mode}</p>
        <p span className="icon"><FaChevronDown /></p>
      </summary>
        <StopsList
          stops={item.stops}
        />
    </details>
  </Root>
);

{/* <button type="button"></button> */}
export default RouteItem;
