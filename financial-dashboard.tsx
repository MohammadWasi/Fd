"use client"

import { useState } from "react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { TrendingUp, TrendingDown, DollarSign, BarChart3, LineChartIcon, AreaChartIcon } from "lucide-react"

// Sample financial data
const monthlyData = [
  {
    month: "Jan",
    revenue: 45000,
    expenses: 32000,
    profit: 13000,
    growth: 8.5,
    customers: 1250,
  },
  {
    month: "Feb",
    revenue: 52000,
    expenses: 35000,
    profit: 17000,
    growth: 15.6,
    customers: 1380,
  },
  {
    month: "Mar",
    revenue: 48000,
    expenses: 33000,
    profit: 15000,
    growth: 6.7,
    customers: 1420,
  },
  {
    month: "Apr",
    revenue: 61000,
    expenses: 38000,
    profit: 23000,
    growth: 27.1,
    customers: 1650,
  },
  {
    month: "May",
    revenue: 55000,
    expenses: 36000,
    profit: 19000,
    growth: 22.2,
    customers: 1580,
  },
  {
    month: "Jun",
    revenue: 67000,
    expenses: 41000,
    profit: 26000,
    growth: 21.8,
    customers: 1750,
  },
  {
    month: "Jul",
    revenue: 72000,
    expenses: 43000,
    profit: 29000,
    growth: 34.5,
    customers: 1890,
  },
  {
    month: "Aug",
    revenue: 69000,
    expenses: 42000,
    profit: 27000,
    growth: 28.1,
    customers: 1820,
  },
  {
    month: "Sep",
    revenue: 78000,
    expenses: 46000,
    profit: 32000,
    growth: 30.0,
    customers: 2010,
  },
  {
    month: "Oct",
    revenue: 74000,
    expenses: 44000,
    profit: 30000,
    growth: 25.4,
    customers: 1950,
  },
  {
    month: "Nov",
    revenue: 82000,
    expenses: 48000,
    profit: 34000,
    growth: 35.2,
    customers: 2150,
  },
  {
    month: "Dec",
    revenue: 89000,
    expenses: 52000,
    profit: 37000,
    growth: 42.3,
    customers: 2280,
  },
]

const expenseBreakdown = [
  { category: "Marketing", amount: 156000, color: "var(--chart-1)" },
  { category: "Operations", amount: 234000, color: "var(--chart-2)" },
  { category: "Technology", amount: 89000, color: "var(--chart-3)" },
  { category: "Personnel", amount: 312000, color: "var(--chart-4)" },
  { category: "Other", amount: 67000, color: "var(--chart-5)" },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-3)",
  },
  growth: {
    label: "Growth %",
    color: "var(--chart-4)",
  },
  customers: {
    label: "Customers",
    color: "var(--chart-5)",
  },
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

const formatPercentage = (value: number) => {
  return `${value.toFixed(1)}%`
}

export default function FinancialDashboard() {
  const [activeChart, setActiveChart] = useState("bar")

  const totalRevenue = monthlyData.reduce((sum, item) => sum + item.revenue, 0)
  const totalExpenses = monthlyData.reduce((sum, item) => sum + item.expenses, 0)
  const totalProfit = monthlyData.reduce((sum, item) => sum + item.profit, 0)
  const avgGrowth = monthlyData.reduce((sum, item) => sum + item.growth, 0) / monthlyData.length

  const renderChart = () => {
    switch (activeChart) {
      case "bar":
        return (
          <ChartContainer config={chartConfig} className="min-h-[400px]">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
              <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
            </BarChart>
          </ChartContainer>
        )
      case "line":
        return (
          <ChartContainer config={chartConfig} className="min-h-[400px]">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="profit" stroke="var(--color-profit)" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ChartContainer>
        )
      case "area":
        return (
          <ChartContainer config={chartConfig} className="min-h-[400px]">
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="var(--color-revenue)"
                fill="var(--color-revenue)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stackId="2"
                stroke="var(--color-expenses)"
                fill="var(--color-expenses)"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ChartContainer>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive view of your financial performance and key metrics</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12.5% from last year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalExpenses)}</div>
            <p className="text-xs text-muted-foreground">+8.2% from last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalProfit)}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +18.7% from last year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Growth</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatPercentage(avgGrowth)}</div>
            <p className="text-xs text-muted-foreground">Monthly average growth rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Chart Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Monthly revenue, expenses, and profit trends</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeChart === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveChart("bar")}
                className="bg-black text-white"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Bar
              </Button>
              <Button
                variant={activeChart === "line" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveChart("line")}
                className="bg-black text-white"
              >
                <LineChartIcon className="h-4 w-4 mr-2" />
                Line
              </Button>
              <Button
                variant={activeChart === "area" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveChart("area")}
                className="bg-black text-white"
              >
                <AreaChartIcon className="h-4 w-4 mr-2" />
                Area
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>{renderChart()}</CardContent>
      </Card>

      {/* Additional Charts and Data */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Expense Breakdown Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
            <CardDescription>Distribution of expenses by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <PieChart>
                <Pie
                  data={expenseBreakdown}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="amount"
                  label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{data.category}</p>
                          <p className="text-sm text-muted-foreground">{formatCurrency(data.amount)}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Growth Rate Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Growth Rate Trend</CardTitle>
            <CardDescription>Monthly growth percentage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{label}</p>
                          <p className="text-sm text-muted-foreground">
                            Growth: {formatPercentage(payload[0].value as number)}
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Line type="monotone" dataKey="growth" stroke="var(--color-growth)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Data Table</CardTitle>
          <CardDescription>Detailed monthly financial metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Expenses</TableHead>
                <TableHead className="text-right">Profit</TableHead>
                <TableHead className="text-right">Growth %</TableHead>
                <TableHead className="text-right">Customers</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthlyData.map((row) => (
                <TableRow key={row.month}>
                  <TableCell className="font-medium">{row.month}</TableCell>
                  <TableCell className="text-right">{formatCurrency(row.revenue)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(row.expenses)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(row.profit)}</TableCell>
                  <TableCell className="text-right">{formatPercentage(row.growth)}</TableCell>
                  <TableCell className="text-right">{row.customers.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={row.profit > 20000 ? "default" : "secondary"}>
                      {row.profit > 20000 ? "Strong" : "Moderate"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
