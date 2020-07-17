import React, { useEffect } from 'react';
import { useApolloClient, useLazyQuery } from '@apollo/react-hooks';
import { GeneralBtn, StopsList } from 'components';
import { queries } from 'graphs';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

const Root = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-details-marker {
    display: none;
  }

  &:focus {
    outline: 0;
  }

  .summary {
    width: 100%;

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
    grid-template-columns: 0.5fr 0.5fr 4fr 1fr;

    /* these min-widths, and the container divs for the p tags, are essential to
    override the minimum sizing alogirthm of a flex item. without it ellipses
    overflow won't work */
    .g1 {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      display: flex;
      align-items: center;
      min-width: 30px;
    }

    .g2 {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      display: flex;
      align-items: center;
      min-width: 30px;
    }

    .g3 {
      grid-row: 1 / 2;
      grid-column: 3 / 4;
      padding-right: 1rem;
      display: flex;
      align-items: center;
      min-width: 0;
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

  .details {
    padding: 1rem;
  }
`;

function RouteItem({ detailsOpen, item }) {
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
      <div className="summary g">
        <div className="g1">
          <p>{item.shortName}</p>
        </div>
        <div className="g2">
          <p>{item.mode}</p>
        </div>
        <div className="g3">
          <p>{item.longName}</p>
        </div>
        <GeneralBtn
          className="g4"
          handleClick={() => viewJourney()}
          primary
        >
          Pin Stops
        </GeneralBtn>
        <p className="icon g5"><FaChevronDown /></p>
      </div>
      <div className="details" style={{display: detailsOpen ? 'initial' : 'none'}}>
        <StopsList
          stops={item.stops}
        />
      </div>
    </Root>
  );
};

export default RouteItem;
