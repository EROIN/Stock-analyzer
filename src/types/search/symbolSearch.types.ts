export interface SymbolSearch {
  '1. symbol': 'INTC';
  '2. name': 'Intel Corp';
  '3. type': 'Equity';
  '4. region': 'United States';
  '5. marketOpen': '09:30';
  '6. marketClose': '16:00';
  '7. timezone': 'UTC-04';
  '8. currency': 'USD';
  '9. matchScore': '0.6667';
}

export interface SymbolSearchAPIResponse {
  bestMatches: SymbolSearch[];
}
