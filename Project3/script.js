
var d1 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/spain/spa_case_data_rev.csv"
var d2 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/spain/spa_death_data_rev.csv"
var d3 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/goog/goog_high_data_rev.csv"
 
Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
     return rows.map(function(row) { return row[key]; });
    }
    var t1 = {
        type: "scatter",
        mode: "lines",
        name: 'Cases',
        x: unpack(rows, 'Dates'),
         y: unpack(rows, 'Case'),
        line: {color: '#21A216'}
    }
   
    var data = [t1];
    var layout = {
        autosize: true,
        title: {
        text : 'Total Covid-19 cases in Spain'
    },
    xaxis: {
        title : {
            text : 'Date' 
        }
    },
    yaxis : {
        title : {
            text : 'Total Amount'
        }
    }
    };    
    Plotly.newPlot('display1', data, layout);
})
Plotly.d3.csv(d2, function(err, rows){
    function unpack2(rows, key) {
       return rows.map(function(row) { return row[key]; });
    }
    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'Deaths',
        x: unpack2(rows, 'Dates'),
        y: unpack2(rows, 'Death'),
        line: {color: '#FF1F00'}
    }
    var data = [t2];
    var layout = {
        autosize: true,
        title: {
        text : 'Total Covid-19 deaths in Spain'
    },
    xaxis: {
        title : {
            text : 'Date' 
        }
    },
    yaxis : {
        title : {
            text : 'Total Amount'
        }
    }
    };
    Plotly.newPlot('display2',data, layout);
})

Plotly.d3.csv(d3, function(err, rows){
    function unpack3(rows, key) {
       return rows.map(function(row) { return row[key]; });
    }
    var t2 = {
        type: "scatter",
        mode: "lines",
        name: 'High',
        x: unpack3(rows, 'date'),
        y: unpack3(rows, 'high'),
        line: {color: '#FF1F00'}
    }
    var data = [t2];
    var layout = {
        autosize: true,
        title: {
        text : 'Google financial stock (High)'
    },
    xaxis: {
        title : {
            text : 'Date' 
        }
    },
    yaxis : {
        title : {
            text : 'Amount'
        }
    }
    };
    Plotly.newPlot('display3',data,layout);
})
 

