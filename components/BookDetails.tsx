import { useState } from "react";

interface BookDetailsProps {
    title: string;
    author: string;
    rating: number;
    imageUrl: string;
    synopsis: string;
}

export default function BookDetails({ title, author, rating, imageUrl, synopsis }: BookDetailsProps) {
    const [showSynopsis, setShowSynopsis] = useState(false);

    return (
        <div 
            className="relative w-full cursor-pointer"
            onClick={() => setShowSynopsis(!showSynopsis)}
        >
            {/* Container principal */}
            <div className="relative w-full">
                {/* Frente do livro */}
                <div 
                    className={`
                        w-full bg-white p-3 rounded-xl border border-slate-100 shadow-sm 
                        hover:-translate-y-1 transition-all duration-500
                        ${showSynopsis 
                            ? "opacity-0 absolute top-0 [transform:rotateY(90deg)]" 
                            : "opacity-100 relative"
                        }
                    `}
                >
                    <img
                        src={imageUrl}
                        className="w-full aspect-2/3 object-cover rounded-lg mb-3"
                        alt="Capa do livro"
                    />
                    <h4 className="font-bold text-sm truncate">
                        {title}
                    </h4>
                    <p className="text-xs text-slate-500">
                        {author}
                    </p>
                    <span className="text-yellow-400 text-xs font-bold">
                        ★ {rating}
                    </span>
                </div>

                {/* Sinopse */}
                <div 
                    className={`
                        w-full bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl 
                        border border-blue-100 shadow-sm transition-all duration-500
                        ${showSynopsis 
                            ? "opacity-100 relative [transform:rotateY(0deg)]" 
                            : "opacity-0 absolute top-0 [transform:rotateY(-90deg)]"
                        }
                    `}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-sm text-slate-800">
                                    {title}
                                </h4>
                                <p className="text-xs text-slate-500">
                                    {author}
                                </p>
                            </div>
                            <span className="text-yellow-400 text-xs font-bold">
                                ★ {rating}
                            </span>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto max-h-40">
                            <h5 className="text-xs font-semibold text-blue-600 mb-2">
                                SINOPSE
                            </h5>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {synopsis}
                            </p>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-blue-100">
                            <div className="text-xs text-blue-500 font-medium text-center">
                                Clique para voltar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}