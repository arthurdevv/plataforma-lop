import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await pool.query(
      'SELECT id, name, email, password FROM users WHERE email = $1',
      [email]
    );

    if (user.rows.length === 0) {
      return NextResponse.json(
        { error: 'E-mail não encontrado.' },
        { status: 404 }
      );
    }

    const { name, password: userPassword } = user.rows[0];

    if (userPassword !== password) {
      return NextResponse.json({ error: 'Senha incorreta.' }, { status: 401 });
    }

    return NextResponse.json(
      { message: 'login_successful', user: { name, email } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
