const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const db = require('../backend/db');

async function importCSV(filePath, tableName) {
  const records = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true }))
      .on('data', row => records.push(row))
      .on('end', async () => {
        try {
          for (const row of records) {
            await db.query(
              `INSERT INTO ${tableName} (date, value) VALUES ($1, $2)`,
              [row.date, row.value]
            );
          }
          console.log(`✅ Imported ${records.length} rows into ${tableName}`);
          resolve();
        } catch (err) {
          console.error(`❌ Error importing ${tableName}:`, err);
          reject(err);
        }
      })
      .on('error', reject);
  });
}

async function importAll() {
  try {
    await importCSV(path.resolve(__dirname, '../data/gold_pln.csv'), 'gold_pln');
    await importCSV(path.resolve(__dirname, '../data/gold_realestate.csv'), 'gold_realestate');
    await importCSV(path.resolve(__dirname, '../data/wig_realestate.csv'), 'wig_realestate');
    console.log('✅ All imports completed');
    process.exit(0);
  } catch (err) {
    console.error('❌ Import process failed', err);
    process.exit(1);
  }
}

importAll();
