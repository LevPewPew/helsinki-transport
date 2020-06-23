import React from 'react';

const AlertItem = ({ item }) => (
  <div>
    <p><strong>{item.route.shortName}, {item.route.longName}</strong></p>
    <p>{item.alertSeverityLevel} Severity Alert: {item.alertEffect} due to {item.alertCause}</p>
    <p>{item.alertHeaderText}</p>
    <p>{item.alertDescriptionText}</p>
    <p>Started: <em>{item.effectiveStartDate}</em></p>
    <p>Estimated End: <em>{item.effectiveEndDate}</em></p>
  </div>
);

export default AlertItem;
