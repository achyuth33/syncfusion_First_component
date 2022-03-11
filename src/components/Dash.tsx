import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Category, ChartComponent, ColumnSeries, DataLabel, Font, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
import './dash.css';

//const style_css = `
//.header{
  //  color:red;

    
//}
//`
export default class Dash extends React.Component {

    //constructor() {
        //super(...arguments);
        
    //}
    // Template for line Chart 
    cellSpacing = [25, 25];

    lineTemplate() {
        const lineData = [
            { x: 2013, y: 28 }, { x: 2014, y: 25 }, { x: 2015, y: 26 }, { x: 2016, y: 27 },
            { x: 2017, y: 32 }, { x: 2018, y: 35 },
        ];
        return (<div className="template">
                <ChartComponent style={{ "height": "200px" }}><Inject services={[LineSeries]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={lineData} xName='x' yName='y' type='Line'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    }
    // Template for Pie Chart
    pieTemplate(): JSX.Element {
        const pieData = [
            { x: 'TypeScript', y: 13, text: 'TS 13%' },
            { x: 'React', y: 12.5, text: 'React 12.5%' },
            { x: 'MVC', y: 12, text: 'MVC 12%' },
            { x: 'Core', y: 12.5, text: 'Core 12.5%' },
            { x: 'Vue', y: 10, text: 'Vue 10%' },
            { x: 'Angular', y: 40, text: 'Angular 40%' }
        ];
        return (<div className="template">
            <AccumulationChartComponent style={{ "height": "200px" }} tooltip={{ enable: true }}><Inject services={[AccumulationTooltip]}/>
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' innerRadius="40%"/>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>);
    }
    // Template for Pie Chart 1
    pieTemplate1(): JSX.Element {
        const pieData = [
            { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
            { 'x': 'iPhone', y: 19, text: '19%' },
            { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
            { 'x': 'Android', y: 12, text: '12%' }
        ];
        const dataLabel:any = { visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' } };
        return (<div className="template">
            <AccumulationChartComponent style={{ "height": "200px" }} tooltip={{ enable: true }}>
                <Inject services={[AccumulationTooltip]}/>
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={pieData} dataLabel={dataLabel} xName='x' yName='y' radius="70%" name='Browser'/>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>);
    }
    columnTemplate() {
        const chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        return (<div className="template">
                <ChartComponent style={{ "height": "200px" }} primaryXAxis={{ valueType: 'Category' }}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={chartData} xName='month' yName='sales' type='Column'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    }
    render() {
        return (<div>
            <div className="container">
                <div>
                    <DashboardLayoutComponent id="dashboard_default" columns={7} cellSpacing={this.cellSpacing} allowResizing={true}>
                        <PanelsDirective>
                            <PanelDirective sizeX={1} sizeY={1} row={0} col={0} content={this.pieTemplate} header="<div> <h3>Widget 0 </h3></div>"/>
                            <PanelDirective sizeX={1} sizeY={2} row={0} col={4} content={this.columnTemplate} header="<div><h3>Widget 1</h3></div>"/>
                            <PanelDirective sizeX={3} sizeY={2} row={0} col={1} header="<div><h3>Widget 2</h3></div>"/>
                            <PanelDirective sizeX={1} sizeY={1} row={1} col={0} content={this.lineTemplate} header="<div><h3>Widget 3</h3></div>"/>
                            <PanelDirective sizeX={2} sizeY={1} row={2} col={0} header="<div><h3>Widget 4</h3></div>"/>
                            <PanelDirective sizeX={1} sizeY={1} row={2} col={2} content={this.pieTemplate1} header="<div><h3>Widget 5</h3></div>"/>
                            <PanelDirective sizeX={1} sizeY={1} row={2} col={3} header="<div><h3>Widget 6</h3></div>"/>
                            <PanelDirective sizeX={1} sizeY={1} row={2} col={3} header="<div><h3>Widget 7</h3></div>"/>
                           
                        </PanelsDirective>
                    </DashboardLayoutComponent>
                </div>
            </div>
        </div>);
    }
}