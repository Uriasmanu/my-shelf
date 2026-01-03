export interface Book {
    id: string;
    imageUrl: string;
    titulo: string;
    category: string;
    author: string;
    currentPage: number;
    progress: number;
    totalPages: string,
    createdAt: string;
    status: 'reading' | 'completed' | 'on-hold' | 'dropped' | 'plan-to-read';
    avaliation?:  0 | 1 | 2 | 3 | 4 | 5
}