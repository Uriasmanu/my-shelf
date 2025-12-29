import { X } from "lucide-react";
import React, { MouseEvent } from "react";


interface FormBooksProps {
    handleOverlayClick: (e: MouseEvent) => void;
    closeModal: () => void;
    isModalOpen: boolean;
}


export default function FormBooks({ handleOverlayClick, closeModal, isModalOpen }: FormBooksProps) {

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
                    >
                        <X size={24} className="text-slate-500" />
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
                            />
                        </div>

                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
                                Status da Leitura
                            </label>
                            <select
                                id="status"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            >
                                <option value="to-read">Planejo Ler</option>
                                <option value="reading">Lendo</option>
                                <option value="completed">Concluído</option>
                                <option value="paused">Pausado</option>
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
                                        className="text-2xl text-slate-300 hover:text-yellow-400 transition-colors"
                                        aria-label={`Avaliar com ${star} estrelas`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="sticky bottom-0 bg-white p-6 border-t border-slate-200 z-10">
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
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
