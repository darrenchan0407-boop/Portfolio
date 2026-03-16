import type { Portfolio } from "../portfolio-types";
import { xiaomengPortfolio } from "./xiaomeng";
import { ducPortfolio } from "./duc";
import { ilhamPortfolio } from "./ilham";
import { brunoPortfolio } from "./bruno";
import { juanPortfolio } from "./juan";

const portfolioRegistry: Record<string, Portfolio> = {
  [xiaomengPortfolio.id]: xiaomengPortfolio,
  [ducPortfolio.id]: ducPortfolio,
  [ilhamPortfolio.id]: ilhamPortfolio,
  [brunoPortfolio.id]: brunoPortfolio,
  [juanPortfolio.id]: juanPortfolio,
};

export const getPortfolioIds = () => Object.keys(portfolioRegistry);

export const getPortfolioById = (id: string): Portfolio | undefined =>
  portfolioRegistry[id.toLowerCase()];

