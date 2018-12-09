import React, { Component } from 'react';
import styled from '@emotion/styled';
import { chartColors } from '../../global/styleConstants';
import { iso2ToIso3 } from '../../utils/countryCodeConverter';
import * as Datamap from 'datamaps';

const MapContentStyled = styled.div`
  min-width: 800px;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  .map-container {
    position: relative;
    flex: 1 1 100%;
  }

  .tooltip {
    margin: 0px;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(204, 204, 204);
    font-size: 14px;
    white-space: nowrap;
  }
`;

export class MapContent extends Component {
  componentDidMount() {
    // Should only be run in the browser, not in test environment
    // Datamap causes error in jest: [TypeError: Datamap is not a constructor]
    if (typeof jest === 'undefined') {
      new Datamap({
        element: document.getElementsByClassName('map-container')[0],
        fills: {
          MARKED: chartColors[0],
          defaultFill: '#dddddd',
        },
        data: this.props.data.reduce(
          (acc, { label, tooltip }) => ({
            ...acc,
            [iso2ToIso3(label)]: { fillKey: 'MARKED', tooltip },
          }),
          {}
        ),
        geographyConfig: {
          highlightFillColor: chartColors[2],
          popupTemplate: function(geo, data) {
            return [
              '<div class="tooltip"><p><strong>',
              geo.properties.name,
              '</strong></p><p>',
              data.tooltip.replace(/\n/g, '<br/>'),
              '</p></div>',
            ].join('');
          },
        },
      });
    }
  }
  render() {
    return (
      <MapContentStyled>
        <div className="map-container" />
      </MapContentStyled>
    );
  }
}
