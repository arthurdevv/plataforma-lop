import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function GET(req: NextRequest) {
  try {
    const result = await pool.query(
      'SELECT id, name, email, password FROM users'
    );

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
