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
      title: body.titulo,
      category: body.category,
      author: body.author,
      status: body.status,
      currentPage: 0,
      totalPages: body.totalPages,
      progress: 0,
      rating: body.rating || 0,
      createdAt: new Date().toISOString(),
      imageUrl: body.imageUrl
    };

    books.push(newBook);
    await fs.writeFile(dataFilePath, JSON.stringify(books, null, 2));
    return NextResponse.json(newBook, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao criar livro ${error}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {

    try {
      await fs.access(dataFilePath);
    } catch {
      return NextResponse.json(
        { error: "Arquivo não encontrado" },
        { status: 404 }
      );
    }

    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    const books = JSON.parse(fileData);

    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.error("Erro ao ler arquivo:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}