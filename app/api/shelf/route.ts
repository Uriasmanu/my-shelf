import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from 'fs';
import { Book } from "@/app/models/Book";

const dataFilePath = path.join(process.cwd(), 'data', 'shelf.json');

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const fileData = await fs.readFile(dataFilePath, 'utf-8');
        const books = JSON.parse(fileData);

        const newBook: Book = {
            id: Date.now().toString(),
            titulo: body.titulo,
            category: body.category,
            author: body.author,
            status: body.status,
            currentPage: 0,
            totalPages: body.totalPages,
            progress: 0,
            avaliation: body.avaliation || 0,
            createdAt: new Date().toISOString()
        };

        books.push(newBook);
        await fs.writeFile(dataFilePath, JSON.stringify(books, null, 2))

    } catch (error) {
        return NextResponse.json(
            { error: `Erro ao criar livro ${error}` },
            { status: 500 }
        )
    }
}