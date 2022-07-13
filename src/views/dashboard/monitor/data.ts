import type { EChartOption } from "utils/echart";

export const lineOption: EChartOption = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["总用户数", "活跃用户数"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["5", "6", "7", "8", "9"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "总用户数",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [220, 182, 191, 234, 290],
    },
    {
      name: "活跃用户数",
      type: "line",
      smooth: true,
      stack: "Total",
      data: [120, 132, 101, 134, 90],
    },
  ],
};

export const barOption: EChartOption = {
  xAxis: {
    type: "category",
    data: ["5", "6", "7", "8", "9"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [50, 100, 78, 34, 45],
      type: "bar",
    },
  ],
};

export const pieOption: EChartOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  series: [
    {
      name: "内容分布",
      type: "pie",
      radius: "55%",
      data: [
        { value: 100, name: "图片" },
        { value: 400, name: "文章" },
        { value: 200, name: "视频" },
        { value: 150, name: "音频" },
        { value: 350, name: "画作" },
      ],
    },
  ],
};

const data = [
  {
    name: "花香",
    children: [
      {
        name: "花香",
        value: 4,
        children: [
          {
            name: "玫瑰",
            value: 2,
          },
          {
            name: "薰衣草",
            value: 2,
          },
        ],
      },
    ],
  },
  {
    name: "橡木桶",
    children: [
      {
        name: "木香",
        children: [
          {
            name: "桃木",
            value: 2,
          },
        ],
      },
      {
        name: "坚果",
        children: [
          { name: "杏仁", value: 2 },
          { name: "核桃", value: 2 },
          { name: "椰子", value: 2 },
        ],
      },
    ],
  },
  {
    name: "泥炭",
    children: [
      {
        name: "泥炭",
        children: [
          {
            name: "药用",
            value: 2,
          },
          {
            name: "柴油",
            value: 2,
          },
        ],
      },
    ],
  },
];

export const sunOption: EChartOption = {
  series: {
    type: "sunburst",
    data: data,
    radius: [0, "90%"],
    label: {
      rotate: "radial",
    },
  },
};
