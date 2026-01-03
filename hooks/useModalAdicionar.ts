'use client';

import { useEffect, useState } from "react";

export function useModalAdicionar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    useEffect(() => {
        if (typeof document === 'undefined') return;

        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return {
        isModalOpen,
        openModal,
        closeModal,
        handleOverlayClick
    }
}