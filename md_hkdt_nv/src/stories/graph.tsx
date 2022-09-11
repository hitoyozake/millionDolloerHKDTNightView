import React from "react";
import {Line} from "react-chartjs-2"
import Chart from 'chart.js/auto' //必須
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const options: {} = {
    responsive: true,
    maintainAspectRatio: true,
    layout:{
        padding: 30.0
    },
    legend:{
        display: false,
        position: "right"
    },
    scales: {
        "y": {
            grace: 0.5
        }

    }
   
  };

export const Graph = ()=>{
    const graphData = {
        labels:[ "9/6", "9/7", "9/8", "9/9", "9/10", "9/11"],
        datasets:[
            {   
                label: "Doll/JPY",
                data: [
                    140.49,
                    140.44,
                    143.15,
                    144.45,
                    143.86,
                    142.50
                ],
                borderColor: "rgb(75, 180, 190)"
            }
        ]
    }
    return <Line 
        data = {graphData}
        options={options}
        id="chart-key"
    />
}
