import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // do not cache ever

let msftPrice = getRandomPrice(405, 415);
setInterval(() => {
    msftPrice = getRandomPrice(405, 415);
}, 900)

let aaplPrice = getRandomPrice(220, 230);
setInterval(() => {
    aaplPrice = getRandomPrice(220, 230);
}, 925)

type Ticker = "MSFT" | "AAPL";
type GetProps = {
    params: { ticker: Ticker }
}

/**
 * Returns the ticker and current stock price.
 * **NOTE:** for the purposes of this challenge only MSFT and AAPL are allowed tickers
 */
export async function GET(request: NextRequest, { params }: GetProps): Promise<Response> {
    await sleep(50); // simulate network delay

    const ticker = params.ticker.toUpperCase();
    if (!["MSFT", "AAPL"].includes(ticker)) {
        return NextResponse.json({ error: `${ticker} not found` }, { status: 404 });
    }

    const price = ticker === "MSFT" ? msftPrice : aaplPrice

    return NextResponse.json({
        ticker,
        price
    });
}


/**
 * Creates a random stock price between low and high rounded to 2 decimal places.
 */
function getRandomPrice(low: number, high: number): number {
    const price = Math.random() * (high - low) + low;
    return Math.round(price * 100) / 100;
}

/**
 * Async sleep
 */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}