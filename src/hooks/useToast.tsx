"use client";

import { createContext, ReactNode, useContext, useRef, useState } from "react";
import Toast from "@/components/ui/Toast";
import { ToastProps } from "@/models/toast";

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastContextData {
  showToast: (options: ToastProps) => void;
}

const ToastContext = createContext({} as ToastContextData);

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<
    (ToastProps & { id: string; isExiting?: boolean })[]
  >([]);
  const timeouts = useRef<Record<string, NodeJS.Timeout>>({});

  function showToast(options: ToastProps) {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { ...options, id }]);

    const timeout = setTimeout(() => triggerExit(id), options.duration || 5000);
    timeouts.current[id] = timeout;
  }

  function triggerExit(id: string) {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isExiting: true } : toast
      )
    );
    setTimeout(() => removeToast(id), 500); // 500ms para a animação
  }

  function removeToast(id: string) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    clearTimeout(timeouts.current[id]);
    delete timeouts.current[id];
  }

  // Funções para pausar e reiniciar o temporizador
  function pauseTimer(id: string) {
    clearTimeout(timeouts.current[id]);
  }

  function startTimer(id: string, duration: number) {
    timeouts.current[id] = setTimeout(() => triggerExit(id), duration);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <>
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 9999,
          }}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onPauseTimer={() => pauseTimer(toast.id)} // Pausa o timer
              onStartTimer={() => startTimer(toast.id, toast.duration || 5000)} // Reinicia o timer
              onClose={() => triggerExit(toast.id)} // Fecha manualmente
            />
          ))}
        </div>
        {children}
      </>
    </ToastContext.Provider>
  );
}

function useToast() {
  return useContext(ToastContext);
}

export { ToastProvider, useToast };
