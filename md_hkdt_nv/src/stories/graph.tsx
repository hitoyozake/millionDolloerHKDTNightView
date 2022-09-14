import React from "react";
import {Line} from "react-chartjs-2"
import Chart from 'chart.js/auto' //必須
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const options: {} = {
    responsive: true,
    maintainAspectRatio: false,
    //aspectRatio: 832.0/552.0,

    layout:{
    },
    legend:{
        //display: false,
        //position: "right"
    },
    scales: {
        "y": {
            grace: 1.0
        }

    }
   
  };

export interface GraphProps {
    height: string
}

export const Graph = (props:GraphProps)=>{
    const graphData = {
        labels:[ "9/6", "9/7", "9/8", "9/9", "9/10", "9/11"],
        datasets:[
            {   
                label: "Doll/JPY",
                data: [
                    140.44,
                    143.15,
                    144.45,
                    143.86,
                    142.50,
                    142.54
                ],
                borderColor: "rgb(75, 180, 190)",
                fillColor: "rgb(151,187,205)"
            }
        ]
    }
    return ( 
                <Line 
                data = {graphData}
                options={options}
                id="chart-key"
                height={props.height}
            />
        )
}
