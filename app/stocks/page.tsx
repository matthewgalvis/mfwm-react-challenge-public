import * as React from "react"
import StockCard from "./stock-card"

export const dynamic = 'force-dynamic' // do not cache ever

export default async function Page(): Promise<React.ReactNode> {
    return (
        <>
            {/* MSFT */}
            <StockCard></StockCard>

            {/* AAPL */}
            <StockCard></StockCard>

            {/* CMGC */}
            <StockCard></StockCard>

        </>
    )
}