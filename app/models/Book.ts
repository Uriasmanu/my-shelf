export interface Book {
    id: string;
    imageUrl: string;
    title: string;
    category: string;
    author: string;
    currentPage: number;
    progress: number;
    totalPages: string,
    createdAt: string;
    status: 'reading' | 'completed' | 'on-hold' | 'dropped' | 'plan-to-read';
    rating?:  0 | 1 | 2 | 3 | 4 | 5
}