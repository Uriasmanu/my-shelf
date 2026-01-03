
interface CardBibliotecaProps {
    title: string;
    author: string;
    rating: number;
    imageUrl: string;
}

export default function CardBiblioteca({ title, author, rating, imageUrl }: CardBibliotecaProps) {
    return (

        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:-translate-y-1 transition">
            <img
                src={imageUrl}
                className="w-full aspect-2/3 object-cover rounded-lg mb-3"
                alt=""
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
    )
}