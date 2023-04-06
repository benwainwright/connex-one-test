import prometheusMiddleware from "express-prometheus-middleware"
import { METRICS_PATH } from "../../core/constants"

export const metricsHandler = prometheusMiddleware({
  metricsPath: METRICS_PATH ,
  collectDefaultMetrics: true,
})

