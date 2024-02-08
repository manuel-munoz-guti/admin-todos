import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, segments: Segments) { 
  const { params: { id } } = segments;

  const todo = await prisma.todo.findUnique({
    where: { id }
  });

  if (!todo) {
    return NextResponse.json(
        { message: 'Record not found'},
        { status: 404 }
    );
  }

  return NextResponse.json({
    todo
  })
}