"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px] "
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            className=""
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              wrapperStyle={{ outline: "none",backgroundColor: "red" }}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="#8ec5ff"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="#2b7fff"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}


import { Bar, BarChart, XAxis, YAxis } from "recharts"



export const descriptionBar = "A horizontal bar chart"

const chartDataBar = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfigBar = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarHorizontal() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Horizontal</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigBar}>
          <BarChart
            accessibilityLayer
            data={chartDataBar}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" fill="#8ec5ff" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              fill="#8ec5ff"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="#8ec5ff" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

