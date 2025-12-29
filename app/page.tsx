import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="text-slate-800 bg-slate-50 min-h-screen">
      <NavBar />

      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Olá, Leitor</h1>
          <p className="text-slate-500 mt-1">
            Você já leu 12 livros este ano. Continue assim!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Lendo agora */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">
                  Lendo Agora
                </h2>
                <a
                  href="#"
                  className="text-sm text-indigo-600 font-medium hover:underline"
                >
                  Ver detalhes
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-40 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
                    alt="Capa do livro"
                    className="w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 rounded bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                      Ficção Científica
                    </span>

                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      Duna: Messias
                    </h3>

                    <p className="text-slate-500 italic mb-4">
                      Frank Herbert
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 font-medium">
                          Progresso
                        </span>
                        <span className="text-indigo-600 font-bold">
                          65%
                        </span>
                      </div>

                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>

                      <p className="text-xs text-slate-400">
                        Página 182 de 280
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
                      Atualizar Página
                    </button>

                    <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-slate-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Biblioteca */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">
                  Minha Biblioteca
                </h2>

                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white font-medium">
                    Todos
                  </button>
                  <button className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-indigo-300">
                    Quero Ler
                  </button>
                  <button className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-indigo-300">
                    Lidos
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Card */}
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:-translate-y-1 transition">
                  <img
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop"
                    className="w-full aspect-[2/3] object-cover rounded-lg mb-3"
                    alt=""
                  />
                  <h4 className="font-bold text-sm truncate">
                    O Alquimista
                  </h4>
                  <p className="text-xs text-slate-500">
                    Paulo Coelho
                  </p>
                  <span className="text-yellow-400 text-xs font-bold">
                    ★ 4.8
                  </span>
                </div>

                {/* Add card */}
                <div className="bg-white p-3 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-300">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                    <span className="text-slate-400 text-2xl">+</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Adicionar Livro
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <section className="bg-indigo-900 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">
                Meta de Leitura 2024
              </h3>

              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold">12</span>
                <span className="text-indigo-300 text-lg">
                  / 20 livros
                </span>
              </div>

              <div className="w-full bg-indigo-800 rounded-full h-2 mb-4">
                <div
                  className="bg-indigo-400 h-2 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>

              <p className="text-xs text-indigo-200">
                Você está 2 livros adiantada conforme seu cronograma.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-16">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                Resumo Semanal
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Páginas lidas</span>
                  <span className="font-bold">452</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tempo de leitura</span>
                  <span className="font-bold">8.5h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Média diária</span>
                  <span className="font-bold">64 pág</span>
                </div>
              </div>

              <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
                Ver Relatório Completo
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
