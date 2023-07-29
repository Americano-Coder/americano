// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'containers-us-west-132.railway.app',
  database: 'railway',
  password: 'v8SwMetdFqEhpmnCjxsV',
  port: '5757',
});

export async function getDataForPieChart() {
  try {
    const queryResult = await pool.query('SELECT category, amount FROM category_amount');
    return queryResult.rows;
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return [];
  }
}
