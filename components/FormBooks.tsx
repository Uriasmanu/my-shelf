import { X } from "lucide-react";
import React, { MouseEvent, useState } from "react";


interface FormBooksProps {
    handleOverlayClick: (e: MouseEvent) => void;
    closeModal: () => void;
    isModalOpen: boolean;
}

interface FormBook {
    titulo: string;
    imageUrl: string;
    category: string;
    author: string;
    totalPages: string,
    status: 'reading' | 'completed' | 'on-hold' | 'dropped' | 'plan-to-read';
    avaliation: 0 | 1 | 2 | 3 | 4 | 5;
}


export default function FormBooks({ handleOverlayClick, closeModal, isModalOpen }: FormBooksProps) {

    const [formData, setFormData] = useState<FormBook>({
        titulo: '',
        imageUrl: '',
        category: '',
        author: '',
        totalPages: '',
        status: 'plan-to-read',
        avaliation: 0,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [id]: id === 'totalPages' || id === 'avaliation' ?
                (value === '' ? '' : value) :
                value
        }));
    }

    const handleRatingClick = (rating: number) => {
        setFormData(prevData => ({
            ...prevData,
            avaliation: rating as 0 | 1 | 2 | 3 | 4 | 5
        }))
    }

    return (
        <div className="font-sans">

            <div
                className="fixed inset-0 bg-black/50 z-60 transition-opacity duration-300"
                onClick={handleOverlayClick}
                aria-hidden="true"
            />

            <div
                className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-out ${isModalOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
                    <h2 id="modal-title" className="text-xl font-bold text-indigo-900">
                        Nova Leitura
                    </h2>
                    <button
                        onClick={closeModal}
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                        aria-label="Fechar"
                        disabled={isSubmitting}
                    >
                        <X size={24} className="text-slate-500 cursor-pointer" />
                    </button>
                </div>

                <div className="p-6 h-[calc(100%-80px)] overflow-y-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="book-title" className="block text-sm font-medium text-slate-700 mb-2">
                                Título do Livro *
                            </label>
                            <input
                                type="text"
                                id="book-title"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Digite o título do livro"
                                required
                                autoFocus
                                value={formData.titulo}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label htmlFor="book-image" className="block text-sm font-medium text-slate-700 mb-2">
                                Imagem do Livro *
                            </label>
                            <input
                                type="text"
                                id="book-title"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Digite o título do livro"
                                required
                                autoFocus
                                value={formData.imageUrl}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-slate-700 mb-2">
                                Autor *
                            </label>
                            <input
                                type="text"
                                id="author"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Nome do autor"
                                required
                                value={formData.author}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                                Categoria *
                            </label>
                            <input
                                type="text"
                                id="category"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Nome da categoria"
                                required
                                value={formData.category}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
                                Status da Leitura
                            </label>
                            <select
                                id="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            >
                                <option value="plan-to-read">Planejo Ler</option>
                                <option value="reading">Lendo</option>
                                <option value="completed">Concluído</option>
                                <option value="on-hold">Pausado</option>
                                <option value="dropped">Desistido</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="pages" className="block text-sm font-medium text-slate-700 mb-2">
                                Páginas
                            </label>
                            <input
                                type="number"
                                id="pages"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="Total de páginas"
                                min="1"
                                value={formData.totalPages}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-2">
                                Avaliação (opcional)
                            </label>
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleRatingClick(star)}
                                        className={`text-2xl transition-colors ${formData.avaliation >= star
                                            ? 'text-yellow-400'
                                            : 'text-slate-300 hover:text-yellow-400'
                                            } disabled:opacity-50`}
                                        aria-label={`Avaliar com ${star} estrelas`}
                                        disabled={isSubmitting}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            {formData.avaliation > 0 && (
                                <p className="mt-2 text-sm text-slate-500">
                                    Avaliação: {formData.avaliation} estrela{formData.avaliation !== 1 ? 's' : ''}
                                </p>
                            )}
                        </div>

                        <div className="sticky bottom-0 bg-white p-6 border-t border-slate-200 z-10">
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    disabled={isSubmitting}
                                    className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                                >
                                    Salvar Leitura
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
