# Motley Fool Wealth Management (MFWM) React Challenge
Hello and thanks for working on the MFWM React Challenge. This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, install all the dependencies. We recommend using npm for this project.

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## The Challenge
You are tasked with designing a new page for a continuously updated stock price tracker that displays the current stock price and shows the [rolling average](https://en.wikipedia.org/wiki/Moving_average) of the last 10 stock prices. The stock price comes from an API that provides price updates approximately every second. In this repo you will find a page with a skeleton structure, a predefined React component (`StockCard`), and an API route to get the stock price for various stocks. In the skeleton structure, there are three stock cards: MSFT, AAPL, and CMGC. MSFT and AAPL will always return a stock price from the API, while CMGC will always error with a 404 not found. 

### Success Criteria
1. Implement the necssary React structure to display the stock price and rolling average of the last 10 stock prices for MSFT and AAPL.
2. Appropriately handle error states from the API in the UI. Please demonstrate this with the CMGC stock card.
3. Please feel free to add any NextJS or React structures or change the predefined structures.
4. Ensure there are no linting or build errors.
5. You will not be judged on your UX design; however, Tailwind has been provided for you to utilize. 

### Deliverables
Once the challenge is complete, please:
1. Upload your code to a public github/gitlab/bitbucket repo and provide a link.
2. Zip up your project without the node_modules and email us a copy of the source code.