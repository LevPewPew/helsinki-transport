import React from 'react';
import { IoMdAlert } from 'react-icons/io';
import styled from 'styled-components';

const Root = styled.li`
  .center-flex-vertically {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    svg {
      margin: 0 0.75rem 0 0;
    }
  }
  
  .timestamp-container {
    margin: 0.5rem 0;
  }

  .description-container {
    margin: 0.5rem 0;
  }
`;

function AlertItem ({ item }) {
  let alertColor;
  switch(item.alertSeverityLevel) {
    case 'UNKNOWN_SEVERITY':
      alertColor = 'white';
      break;
    case 'INFO':
      alertColor = 'white';
      break;
    case 'WARNING':
      alertColor = 'orange';
      break;
    case 'SEVERE':
      alertColor = 'red';
      break;
    default:
      alertColor = 'white';
  }

  let alertEffect;
  switch(item.alertEffect) {
    case 'NO_SERVICE':
      alertEffect = 'No service';
      break;
    case 'REDUCED_SERVICE':
      alertEffect = 'Reduced service';
      break;
    case 'SIGNIFICANT_DELAYS':
      alertEffect = 'Significant delays';
      break;
    case 'DETOUR':
      alertEffect = 'Detour';
      break;
    case 'ADDITIONAL_SERVICE':
      alertEffect = 'Additional service';
      break;
    case 'MODIFIED_SERVICE':
      alertEffect = 'Modified service';
      break;
    case 'OTHER_EFFECT':
      alertEffect = null;
      break;
    case 'UNKNOWN_EFFECT':
      alertEffect = null;
      break;
    case 'STOP_MOVED':
      alertEffect = 'Stop has moved';
      break;
    case 'NO_EFFECT':
      alertEffect = null;
      break;
    default:
      alertEffect = 'Possible change in service or operating procedures';
  }

  let alertCause;
  switch(item.alertCause) {
    case 'UNKNOWN_CAUSE':
      alertCause = 'an unknown cause';
      break;
    case 'OTHER_CAUSE':
      alertCause = null;
      break;
    case 'TECHNICAL_PROBLEM':
      alertCause = 'technical problems';
      break;
    case 'STRIKE':
      alertCause = 'strike';
      break;
    case 'DEMONSTRATION':
      alertCause = 'demonstration';
      break;
    case 'ACCIDENT':
      alertCause = 'accident';
      break;
    case 'HOLIDAY':
      alertCause = 'public holiday';
      break;
    case 'WEATHER':
      alertCause = 'weather';
      break;
    case 'MAINTENANCE':
      alertCause = 'maintenence';
      break;
    case 'CONSTRUCTION':
      alertCause = 'construction';
      break;
    case 'POLICE_ACTIVITY':
      alertCause = 'police activity';
      break;
    case 'MEDICAL_EMERGENCY':
      alertCause = 'medical emergency';
      break;
    default:
      alertCause = null;
  }

  const convertEpochToHumanTime = (epochTime) => {
    let d = new Date(0);
    d.setUTCSeconds(epochTime);
    return d.toLocaleString('en-GB', { timeZone: 'Europe/Helsinki' });
  };

  const alertCauseAndEffectMessageBuilder = (alertEffect, alertCause) => {
    let message;
    if (alertEffect == null) {
      if (alertCause == null) {
        message = "Possible change in service or operating procedures"
      } else {
        message = `Possible change in service or operating procedures due to ${alertCause}`
      }
    } else {
      if (alertCause == null) {
        message = `${alertEffect}`
      } else {
        message = `${alertEffect} due to ${alertCause}`
      }
    }
    
    return message;
  };

  return (
    <Root>
      {
        item.route?.shortName && item.route?.longName &&
        <p><strong>{item.route?.shortName}, {item.route?.longName}</strong></p>
      }
      <div className="center-flex-vertically">
        <IoMdAlert
          color={alertColor}
        />
        <p><em>{alertCauseAndEffectMessageBuilder(alertEffect, alertCause)}</em></p>
      </div>
      <div className="timestamp-container">
        <p>Begins:</p>
        <p><em>{convertEpochToHumanTime(item.effectiveStartDate)}</em></p>
        <p>Approximate End:</p>
        <p><em>{convertEpochToHumanTime(item.effectiveEndDate)}</em></p>
      </div>
      <div className="description-container">
        <p>{item.alertHeaderText}</p>
        <p>{item.alertDescriptionText}</p>
      </div>
    </Root>
  );
}

export default AlertItem;
