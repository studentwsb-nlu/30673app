const fs = require('fs');
const { parse } = require('csv-parse');
const db = require('../backend/db');

async function importCSV(filePath, tableName) {
  const records = [];
  fs.createReadStream(filePath)
    .pipe(parse({ columns: true }))
    .on('data', row => records.push(row))
    .on('end', async () => {
      for (const row of records) {
        await db.query(
          `INSERT INTO ${tableName} (date, value) VALUES ($1, $2)`,
          [row.date, row.value]
        );
      }
      console.log(`Imported ${records.length} records into ${tableName}`);
      process.exit();
    });
}

// Example usage:
importCSV('./data/gold_pln.csv', 'gold_pln');