//
// Run with cmd: ts-node scripts/export-countries.ts
//

import * as fs from "fs";
import csv from "csvtojson";
import { CSVParseParam } from "csvtojson/v2/Parameters";
import { Country } from "../src/types";

const csvParseOptions: Partial<CSVParseParam> = {
  delimiter: ";",
  output: "json",
  quote: '"',
  trim: true,
  checkType: false,
  noheader: true,
  headers: ["name", "countryCode", "currency", "currencyCode"],
};

const hasValidCountryCode = (country: Partial<Country>): boolean => {
  return country.countryCode && country.countryCode.indexOf("-") === -1;
};

const csvToCountries = async (csvFilePath: string): Promise<Country[]> => {
  const countries = (await csv(csvParseOptions).fromFile(csvFilePath)) as Country[];
  return countries.filter(hasValidCountryCode);
};

(async function () {
  const countries = await csvToCountries("resources/countries.csv");

  const countriesByCode = {};
  for (const country of countries) {
    countriesByCode[country.countryCode] = country;
  }

  // countries.map((c) => {
  //     console.log(`${c.countryCode} = "${c.countryCode}",`);
  // });

  fs.writeFileSync("resources/country-list.json", JSON.stringify(countries));
  fs.writeFileSync("resources/country-map.json", JSON.stringify(countriesByCode));
})();
