'use client';

import { useEffect, useState } from "react";

export interface BibliotecaItem {
    id: number;
    title: string;
    author: string;
    rating: number;
    linkedImage: string;
}

export function useBiblioteca() {
    const [data, setData] = useState<BibliotecaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        async function fetchDAta() {
            try {
                const res = await fetch('/data/shelf.json');

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
        fetchDAta();
    }, []);

    return { data, loading, error };
}