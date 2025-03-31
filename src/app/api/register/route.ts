import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const emailCheck = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (emailCheck.rows.length > 0) {
      return NextResponse.json(
        { error: 'O e-mail fornecido já está associado a uma conta.' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
      [name, email, password]
    );

    return NextResponse.json(
      { message: 'user_registered', id: result.rows[0].id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
