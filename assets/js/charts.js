            // charts
            var lineOptions = {
                chart: {
                    type: 'line'
                },
                series: [{
                    name: 'sales',
                    data: [30,40,35,50,49,60,70,91,125]
                }],
                xaxis: {
                    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
                }
            }

            var donutOptions = {
                series: [44, 55, 41, 17, 15],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var columnOptions = {
                    series: [{
                    data: [21, 22, 10, 28, 16, 21, 13, 30]
                }],
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function(chart, w, e) {
                        // console.log(chart, w, e)
                        }
                    }
                },
                // colors: colors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        ['John', 'Doe'],
                        ['Joe', 'Smith'],
                        ['Jake', 'Williams'],
                        'Amber',
                        ['Peter', 'Brown'],
                        ['Mary', 'Evans'],
                        ['David', 'Wilson'],
                        ['Lily', 'Roberts'], 
                    ],
                    labels: {
                        style: {
                        // colors: colors,
                        fontSize: '12px'
                        }
                    }
                }
            };

            var barOptions = {
                series: [{
                   data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }],
                chart: {
                    type: 'bar',
                    height: 370
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                  enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            };

            var lineChart   = new ApexCharts(document.querySelector("#firstReport"), lineOptions);
            var donutChart  = new ApexCharts(document.querySelector("#secondReport"), donutOptions);
            var columnChart = new ApexCharts(document.querySelector("#thirdReport"), columnOptions);
            var barsChart = new ApexCharts(document.querySelector("#fourthReport"), barOptions);

            lineChart.render();
            donutChart.render();
            columnChart.render();
            barsChart.render();
