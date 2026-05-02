import "dotenv/config";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../../generated/prisma/client";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const connectionString = (process.env.DATABASE_URL ?? "").replace(
  "&channel_binding=require",
  "",
);

const adapter = new PrismaNeon({ connectionString });
export const prisma = new PrismaClient({ adapter });
