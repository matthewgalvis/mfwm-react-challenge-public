import * as React from "react"
import StockCard from "./stock-card"
import {Stack} from "@mui/material";
import {StockContainer} from "@/app/stocks/styled";

export const dynamic = 'force-dynamic' // do not cache ever

export default async function Page(): Promise<React.ReactNode> {
    return (
        <StockContainer>
            <Stack direction="row" spacing={2}>
            {/* MSFT */}
            <StockCard stockType={"MSFT"}></StockCard>

            {/* AAPL */}
            <StockCard stockType={"AAPL"}></StockCard>

            {/* CMGC */}
            <StockCard stockType={"CMGC"}></StockCard>
            </Stack>
        </StockContainer>
    )
}