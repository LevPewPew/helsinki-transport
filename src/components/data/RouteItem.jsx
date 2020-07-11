import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { StopsList } from 'components';
import { queries } from 'graphs';
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
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: bold;
      }

      .icon {
        text-align: center;
      }

    }

    .g {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 4fr 1fr 1fr;

      .g1 {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }

      .g2 {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }

      .g3 {
        grid-row: 1 / 2;
        grid-column: 3 / 4;
      }

      .g4 {
        grid-row: 1 / 2;
        grid-column: 4 / 5;
      }

      .g5 {
        grid-row: 2 / 3;
        grid-column: 1 / 5;
      }
    }
  }
`;

function RouteItem({ item }) {
  const [ lazyGetStops, { loading, error, data } ] = useLazyQuery(queries.getStops);

  const viewJourney = () => {
    // const stopIds = item.stops.map((stop) => stop.gtfsId);
    // lazyGetStops({ variables: { ids: stopIds }});
    // setDisplayed(false);
  };

  return (
    <Root>
      <details>
        <summary className="g">
          <p className="g1">{item.shortName}</p>
          <p className="g2">{item.longName}</p>
          <p className="g3">{item.mode}</p>
          <button className="g4" type="button" onClick={() => viewJourney()}>View Journey</button>
          <p className="icon g5"><FaChevronDown /></p>
        </summary>
          <StopsList
            stops={item.stops}
          />
      </details>
      <div></div>
    </Root>
  );
};

export default RouteItem;
