import React from 'react';
import { StopsList } from 'components';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

const Root = styled.li`
  details {
    summary {
      display: flex;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;

      &::-webkit-details-marker {
        display: none;
      }

      &:focus {
        outline: 0;
      }

      .flex-section-1 {
        display: flex;

        p {
          width: 80%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-weight: bold;
        }

        button {
          width: 20%;
        }
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
        <div className="flex-section-1">
          <button type="button">View Journey</button>
          <p>{item.shortName}, {item.longName} - {item.mode}</p>
        </div>
        <p className="icon"><FaChevronDown /></p>
      </summary>
        <StopsList
          stops={item.stops}
        />
    </details>
  </Root>
);

{/* <button type="button"></button> */}
export default RouteItem;
