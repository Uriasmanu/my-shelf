'use client';

import { useState } from "react";
import { BookOpen, ChartSpline, CircleUserRound, HomeIcon, X } from "lucide-react";
import FormBooks from "./FormBooks";
import { useModalAdicionar } from "@/hooks/useModalAdicionar";

export default function NavBar() {
    const { isModalOpen, openModal, closeModal, handleOverlayClick } = useModalAdicionar();

  return (
    <div className="font-sans">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">M</div>
              <span className="text-xl font-bold tracking-tight text-indigo-900">My Shelf</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#" className="text-indigo-600 border-b-2 border-indigo-600 pb-1">Inicio</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition">Biblioteca</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition">Estatisticas</a>
            </div>
            <button
              onClick={openModal}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition cursor-pointer"
            >
              + Nova Leitura
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay e Modal */}
      {isModalOpen && (
        <FormBooks handleOverlayClick={handleOverlayClick} closeModal={closeModal} isModalOpen={isModalOpen} />
      )}

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center">
        <button className="text-indigo-600 flex flex-col items-center">
          <HomeIcon />
          <span className="text-[10px] mt-1">Inicio</span>
        </button>
        <button className="text-indigo-600 flex flex-col items-center">
          <BookOpen />
          <span className="text-[10px] mt-1">Biblioteca</span>
        </button>
        <button className="text-indigo-600 flex flex-col items-center">
          <ChartSpline />
          <span className="text-[10px] mt-1">Status</span>
        </button>
        <button className="text-indigo-600 flex flex-col items-center">
          <CircleUserRound />
          <span className="text-[10px] mt-1">Perfil</span>
        </button>
      </div>
    </div>
  );
}
