import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { error: 'E-mail é obrigatório' },
      { status: 400 }
    );
  }

  try {
    const newsletter = await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json(newsletter, { status: 201 });
  } catch   (error) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: 'E-mail já cadastrado' },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: 'Erro ao cadastrar e-mail' },
        { status: 500 }
      );
    }
  }
}