//Create the Gauge Chart and function to remake the chart if the ID is changed.
function  initGaugeChart() { 
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: justmetadata[0].wfreq,
          title: { text: "Belly Button Washing Frequency (Scrubs per week)" },
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            bar: { color: "darkblue" },
            axis: { range: [0, 9] },
            steps: [
              { range: [0, 1], color: "rgb(255,102,102)" },
              { range: [1, 2], color: "rgb(255,153,153)" },
              { range: [2, 3], color: "rgb(255,204,204)" },
              { range: [3, 4], color: "rgb(255,229,204)" },
              { range: [4, 5], color: "rgb(204,255,153)" },
              { range: [5, 6], color: "rgb(178,255,102)" },
              { range: [6, 7], color: "rgb(153,255,51)" },
              { range: [7, 8], color: "rgb(51,255,51)" },
              { range: [8, 9], color: "rgb(50,200,50)" }
            ],
          }
        }
      ];
      
      var layout = { width: 475, 
                    height: 410, 
                    margin: { t: 0, b: 0 },
                    paper_bgcolor: "white",
                    font: { color: "black", family: "Arial" } };
      Plotly.newPlot('gauge', data, layout);
    };

//Function to remake the Gauge chart. Also called in the app.js file
  function restyleGaugeChart(subjindex) {

    value = justmetadata[subjindex].wfreq;
    Plotly.restyle('gauge', "value", [value]);

  };