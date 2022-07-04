
// add a chart

function addChart() {

    /*
    const chart_range = sheet1.getRange('A1:B10');
    
    // initialize the chart with its builder
    const my_chart = sheet1.newChart();
  
    // add data to chart variable and set its position
    my_chart
      .setChartType(Charts.ChartType.BAR)
      .addRange(chart_range)
      .setPosition(1, 5, 0, 0)
      .setNumHeaders(1)
      .setOption('title', 'Fruit Chart');
  
    // build the chart and insert it into the sheet
    sheet1.insertChart(my_chart.build());
    */
  
  
  
    // get data labels and values
    const total_chart_labels = sheet1.getRange(1, 1, last_row - 1, 1);
    const total_chart_values = sheet1.getRange(1, last_column, last_row - 1, 1);
  
  
    // create the chart
    const total_chart = sheet1.newChart()
        .setChartType(Charts.ChartType.BAR)
        .addRange(total_chart_labels)
        .addRange(total_chart_values)
        .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
        .setPosition(1, 5, 0, 0)
        .setNumHeaders(1)
        .setOption('title', 'Total Fruit Chart')
        .build();
  
  
    // insert chart into sheet
    sheet1.insertChart(total_chart);
  
  }
  