import React, { useEffect } from 'react';
import { useApolloClient, useLazyQuery } from '@apollo/react-hooks';
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
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

    }

    .g {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 0.5fr 4fr 0.5fr 1fr;

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
  const client = useApolloClient();
  const [ lazyGetStops, { data } ] = useLazyQuery(queries.getStops);

  const viewJourney = () => {
    const stopIds = item.stops.map((stop) => stop.gtfsId);
    lazyGetStops({ variables: { ids: stopIds }});
  };

  useEffect(() => {
    if (data) {
      const newRouteStops = data.stops.map((stop) => ({
        __typename: "RouteStop",
        lat: stop.lat,
        lng: stop.lon,
        code: stop.code,
        name: stop.name
      }));
      client.writeData({ data: { routeStops: newRouteStops } });
      client.writeData({ data: { modalDisplayed: false } });
    }
  }, [data]);

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
    </Root>
  );
};

export default RouteItem;
