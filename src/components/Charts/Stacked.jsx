import React from 'react'
import { ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({ width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
  )
}

export default Stacked