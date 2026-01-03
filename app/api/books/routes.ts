import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'shelf.json');
    
    // Verifica se o arquivo existe
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