import { Component, OnInit } from '@angular/core';
import { CardConfig } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statCardList: CardConfig[] = [
    {
      icon: "people",
      title: "New Leads",
      subtitle: "3,050",
      color: "primary"
    },
    {
      icon: "attach_money",
      title: "Ventes de cette semaine",
      subtitle: "$80,500",
      color: "primary"
    },
    {
      icon: "store",
      title: "État de stock",
      subtitle: "Surplus de stock de 8,5% ",
      color: "accent"
    },
    {
      icon: "shopping_cart",
      title: "Commandes",
      subtitle: "305 Commandes de transfert",
      color: "accent"
    }
  ];
  trending_list: CardConfig[] = [
    {
      icon: "trending_up",
      title: "Les utilisateurs actifs",
      subtitle: "10.8k",
      percentage: "+21",
      color: "primary",
      down: false,
    }
  ];

  salesChartBar: any;
  doughNutPie: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.initDailyTrafficChartBar();
    this.initDoughNutPie();
  }


  initDoughNutPie() {
    this.doughNutPie = {
      backgroundColor: "transparent",
      color: [
        "#f44336",
        "#ff9e43",
        "rgba(116, 103, 239, 1)"
      ],
      legend: {
        show: true,
        itemGap: 20,
        icon: "circle",
        bottom: 0,
        textStyle: {
          fontSize: 13,
          fontFamily: "roboto"
        }
      },
      tooltip: {
        show: false,
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      xAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],

      series: [
        {
          name: "Traffic Rate",
          type: "pie",
          radius: ["45%", "72.55%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          hoverOffset: 5,
          stillShowZeroSum: false,

          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "13",
                fontWeight: "normal"
              },
              formatter: "{a}"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "15",
                fontWeight: "normal",
                color: "rgba(116, 103, 239, 1)"
              },
              formatter: "{b} \n{c} ({d}%)"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 65,
              name: "Google"
            },
            {
              value: 20,
              name: "Facebook"
            },
            { value: 15, name: "Others" }
          ],

          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
  }

  initDailyTrafficChartBar() {
    this.salesChartBar = {
      grid: {
        top: 16,
        left: 36,
        right: 16,
        bottom: 32
      },
      legend: {},
      tooltip: {
        show: true,
        trigger: "axis",

        axisPointer: {
          type: "cross",
          lineStyle: {
            opacity: 0
          }
        },
        crossStyle: {
          color: "#000"
        }
      },
      series: [
        {
          data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
          type: "line",
          areaStyle: {},
          smooth: true,
          lineStyle: {
            width: 2,
            color: "#fff"
          }
        }
      ],
      xAxis: {
        show: true,
        type: "category",
        showGrid: false,
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        axisLabel: {
          color: "#ccc",
          margin: 20
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        min: 10,
        max: 60,
        axisLabel: {
          color: "#ccc",
          margin: 20,
          fontSize: 13,
          fontFamily: "roboto"
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        },

        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0.3)" // color at 0% position
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)" // color at 100% position
            }
          ],
          global: false // false by default
        }
      ]
    };
  }
}
