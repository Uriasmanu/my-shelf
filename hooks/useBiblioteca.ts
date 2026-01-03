'use client';

import { useEffect, useState } from "react";

export interface BibliotecaItem {
    id: string;
    title: string;
    author: string;
    rating: number;
    imageUrl: string;
}

export function useBiblioteca() {
    const [data, setData] = useState<BibliotecaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchBooks() {
        try {
            const res = await fetch('/api/shelf', { cache: 'no-store' });

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const json = await res.json();
            setData(json);

        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return { data, loading, error };
}