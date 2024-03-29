import { getUserSessionServer } from '@/auth/actions/auth-actions';
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ?? '10';
    const offset = searchParams.get('offset') ?? '0';

    if ( isNaN(+limit) ) {
        return NextResponse.json(
            { message: 'Limit should be a number'},
            { status: 400 }
        );
    }
    if ( isNaN(+offset) ) {
        return NextResponse.json(
            { message: 'Offset should be a number'},
            { status: 400 }
        );
    }

    const todos = await prisma.todo.findMany({
        skip: +offset,
        take: +limit,
    });

    return NextResponse.json( todos );
}


const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false)
});

export async function POST(request: Request) {
    
    const user = await getUserSessionServer();

    if ( !user ) {
        return NextResponse.json('Not Authorized', { status: 401 });
    }
    
    try {
        const { complete, description } = await postSchema.validate( await request.json() );

        const todo = await prisma.todo.create({ data: { complete, description, userId: user.id } });
    
        return NextResponse.json(todo);

    } catch (error) {
      return NextResponse.json( error, { status: 400 } );    
    }
}

export async function DELETE(request: Request) { 
  
    try {
        const result = await prisma.todo.deleteMany({ where: { complete: true }});

        return NextResponse.json({
          deleted: result
        });   
    } catch (error) {
        return NextResponse.json( error, { status: 500 } );  
    }
}