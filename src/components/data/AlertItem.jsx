import React from 'react';
import { IoMdAlert } from 'react-icons/io';
import styled from 'styled-components';

const CenterVertically = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 0.25rem;
  }
`

const AlertItem = ({ item }) => {
  let alertColor;
  switch(item.alertSeverityLevel) {
    case 'UNKNOWN_SEVERITY':
      alertColor = 'black';
      break;
    case 'INFO':
      alertColor = 'black';
      break;
    case 'WARNING':
      alertColor = 'orange';
      break;
    case 'SEVERE':
      alertColor = 'red';
      break;
    default:
      alertColor = 'black';
  }

  return (
    <li>
      {
        item.route?.shortName && item.route?.longName &&
        <p><strong>{item.route?.shortName}, {item.route?.longName}</strong></p>
      }
      <CenterVertically>
        <IoMdAlert
          color={alertColor}
        />
        <p>{item.alertEffect} due to {item.alertCause}</p>
      </CenterVertically>
      <p>{item.alertHeaderText}</p>
      <p>{item.alertDescriptionText}</p>
      <p>Started: <em>{item.effectiveStartDate}</em></p>
      <p>Estimated End: <em>{item.effectiveEndDate}</em></p>
    </li>
  );
}

export default AlertItem;
