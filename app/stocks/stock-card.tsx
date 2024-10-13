"use client";
import * as React from "react";
import { Grid, Typography, Divider, Skeleton } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useEffect, useState, useCallback } from "react";
// Move all the styles like so its more readable
import {
  StyledCard,
  StyledCardContent,
  StyledHeader,
  StockTypography,
  StyledPriceSection,
  RollingAverageSection,
  CustomIconButton,
} from "./styled";

interface IParams {
  stockType: string;
}

interface ITicker {
  ticker: string;
  price: number;
}

export default function StockCard({ stockType }: IParams) {
  const [tickerDate, setTickerDate] = useState<ITicker | null>(null);
  const [lastPrices, setLastPrices] = useState<number[]>([]);
  const [averagePrice, setAveragePrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const fetchStockPrice = useCallback(async () => {
    try {
      const res = await fetch(`/stocks/${stockType}`);
      const data = await res.json();
      setTickerDate(data);
      setLastPrices((prevPrices) => {
        const updatedPrices = [...prevPrices, data.price];
        if (updatedPrices.length > 10) updatedPrices.shift();
        return updatedPrices;
      });
      setFirstLoad(false);
    } catch (error) {
       // Would normally send error somewhere like #sentry to handle for this example,
       // going to just display "no data" and assume we'd handle with a bug fix
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [stockType]);

  useEffect(() => {
    const interval = setInterval(fetchStockPrice, 1000);
    return () => clearInterval(interval);
  }, [fetchStockPrice]);

  useEffect(() => {
    if (lastPrices.length > 0) {
      const sum = lastPrices.reduce((acc, price) => acc + price, 0);
      setAveragePrice(sum / lastPrices.length);
    }
  }, [lastPrices]);
  // would move this to its own file and export to call
  const renderSkeleton = () => (
    <StyledCard>
      <StyledCardContent>
        <StyledHeader>
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </StyledHeader>
        <Divider sx={{ mb: 2 }} />
        <StyledPriceSection>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={40} />
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Skeleton variant="text" width={100} height={30} />
              <Skeleton variant="text" width={150} height={40} />
            </Grid>
          </Grid>
        </StyledPriceSection>
        <RollingAverageSection>
          <Skeleton variant="text" width={200} height={30} />
          <Skeleton variant="text" width={150} height={40} />
        </RollingAverageSection>
      </StyledCardContent>
    </StyledCard>
  );

  if (loading && firstLoad) return renderSkeleton();

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledHeader>
          <StockTypography variant="h5">{stockType} Stock</StockTypography>
          {tickerDate?.price ? (
            <CustomIconButton>
              {tickerDate.price > averagePrice ? (
                <TrendingUpIcon color="success" />
              ) : (
                <TrendingDownIcon color="error" />
              )}
            </CustomIconButton>
          ) : (
            <CustomIconButton>
              <Typography variant="caption">No Data</Typography>
            </CustomIconButton>
          )}
        </StyledHeader>

        <Divider sx={{ mb: 2 }} />

        <StyledPriceSection>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" color="textSecondary">
                Stock:
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {stockType}
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="h6" color="textSecondary">
                Current Price:
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                ${(tickerDate?.price || 0).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </StyledPriceSection>
        <RollingAverageSection>
          <Typography variant="h6" sx={{ mb: 1 }} color="textSecondary">
            Rolling Average (Last 10):
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            ${(averagePrice || 0).toFixed(2)}
          </Typography>
        </RollingAverageSection>
      </StyledCardContent>
    </StyledCard>
  );
}

