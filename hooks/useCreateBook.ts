'use client';

import { Book } from "@/app/models/Book";
import { useState } from "react";

type CreateBoookInput = Omit<Book, 'id' | 'currentPage' | 'progress' | 'createdAt'>;


export function useCreateBook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createBook(data: CreateBoookInput) {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch('/api/shelf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error('Erro ao criar o livro');
            }

            const createdBook: Book = await res.json();
            return createdBook;

        } catch (err) {
            setError('Não foi possível criar o livro');
            throw err;
        } finally {
            setLoading(false);
        }
    }
    return { createBook, loading, error };
}