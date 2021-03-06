import React from 'react';
import {ResponsivePie} from '@nivo/pie';

class UsersChart extends React.Component {

  render() {

    const {numberOfActiveUsers, numberOfInactiveUsers} = this.props;

    const data = [
      {
        'id': 'active',
        'label': 'active',
        'value': numberOfActiveUsers,
        'color': 'hsla(39, 100%, 50%, 1)',
      },
      {
        'id': 'inactive',
        'label': 'inactive',
        'value': numberOfInactiveUsers,
        'color': 'hsl(232, 70%, 50%)',
      },
    ];

    return (
        <div className="b-users-chart" style={{height: 400}}>
          <ResponsivePie
              data={data}
              margin={{
                'top': 40,
                'right': 80,
                'bottom': 80,
                'left': 80,
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors="set1"
              colorBy="id"
              borderWidth={1}
              borderColor="inherit:darker(0.2)"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              defs={[
                {
                  'id': 'dots',
                  'type': 'patternDots',
                  'background': 'inherit',
                  'color': 'rgba(255, 255, 255, 0.3)',
                  'size': 4,
                  'padding': 1,
                  'stagger': true,
                },
                {
                  'id': 'lines',
                  'type': 'patternLines',
                  'background': 'inherit',
                  'color': 'rgba(255, 255, 255, 0.3)',
                  'rotation': -45,
                  'lineWidth': 6,
                  'spacing': 10,
                },
              ]}
              fill={[
                {
                  'match': {
                    'id': 'inactive',
                  },
                  'id': 'dots',
                },
              ]}
              legends={[
                {
                  'anchor': 'bottom',
                  'direction': 'row',
                  'translateY': 56,
                  'itemWidth': 100,
                  'itemHeight': 18,
                  'itemTextColor': '#999',
                  'symbolSize': 18,
                  'symbolShape': 'circle',
                  'effects': [
                    {
                      'on': 'hover',
                      'style': {
                        'itemTextColor': '#000',
                      },
                    },
                  ],
                },
              ]}
          />
        </div>
    );
  }
}

export default UsersChart;
