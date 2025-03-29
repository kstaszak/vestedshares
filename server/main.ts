import { Hono } from "hono";
import { cors } from "hono/cors";

import { CalculateService } from "./services/calculateService.ts";
import { shareGrants } from "./data/data.ts";

const app = new Hono();
app.use(cors({
  origin: "http://localhost:5173",
}));

const svc = new CalculateService();

app.get("/vested", (c) => {
  const res = svc.calculateTotalVestedShares(shareGrants);
  return c.json(res, 200);
});

Deno.serve(app.fetch);
