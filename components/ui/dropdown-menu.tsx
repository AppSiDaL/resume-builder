"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
};

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within a DropdownMenu");
  }
  return context;
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        !triggerRef.current?.contains(event.target as Node) &&
        !contentRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Cerrar al presionar Escape
    function handleEscape(event: KeyboardEvent) {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <DropdownContext.Provider
      value={{ isOpen, setIsOpen, triggerRef, contentRef }}
    >
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  );
}

// Trigger del dropdown
export function DropdownMenuTrigger({
  children,
  asChild = false,
  className = "",
}: {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const { isOpen, setIsOpen, triggerRef } = useDropdown();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (asChild) {
    if (React.isValidElement(children)) {
      // Añadir tipado para el elemento React
      return React.cloneElement(children as React.ReactElement<{
        onClick?: React.MouseEventHandler;
        "aria-expanded"?: boolean;
        ref?: React.Ref<HTMLButtonElement>;
      }>, {
        onClick: handleClick,
        "aria-expanded": isOpen,
        ref: triggerRef,
      });
    }
    throw new Error("DropdownMenuTrigger children must be a valid React element.");
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      onClick={handleClick}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={className}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  children,
  align = "center",
  className = "",
}: {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  className?: string;
}) {
  const { isOpen, contentRef, triggerRef } = useDropdown();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calcular la posición del dropdown basada en el botón trigger
  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const updatePosition = () => {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;

      let left;
      switch (align) {
        case "start":
          left = rect.left;
          break;
        case "end":
          left = rect.right - (contentRef.current?.offsetWidth || 0);
          break;
        case "center":
        default:
          left =
            rect.left +
            rect.width / 2 -
            (contentRef.current?.offsetWidth || 0) / 2;
      }

      setPosition({
        top: rect.bottom + window.scrollY,
        left: Math.max(0, left + window.scrollX),
      });
    };

    // Actualizar posición inicialmente
    updatePosition();

    // Actualizar posición en scroll o resize
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, align, triggerRef, contentRef]);

  if (!isOpen || !mounted) {
    return null;
  }

  const content = (
    <div
      ref={contentRef}
      role="menu"
      aria-orientation="vertical"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 50,
      }}
      className={`min-w-[12rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md transition-opacity duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-950 ${className}`}
    >
      {children}
    </div>
  );

  return createPortal(content, document.body);
}

export function DropdownMenuItem({
  children,
  onSelect,
  asChild = false,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  onSelect?: (event: React.MouseEvent<HTMLDivElement>) => void;
  asChild?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  const { setIsOpen } = useDropdown();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (onSelect) {
      onSelect(e);
    }

    setIsOpen(false);
  };

  const baseClassName = `
    relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm 
    outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 
    hover:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 
    dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:hover:bg-gray-800
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  if (asChild) {
    // Añadir tipado para el elemento React
    return React.cloneElement(
      React.Children.only(children) as React.ReactElement<{
        role?: string;
        className?: string;
        onClick?: React.MouseEventHandler<HTMLDivElement>;
        tabIndex?: number;
      }>,
      {
        role: "menuitem",
        className: baseClassName,
        onClick: handleClick,
        tabIndex: 0,
      }
    );
  }

  return (
    <div
      role="menuitem"
      className={baseClassName}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`-mx-1 my-1 h-px bg-gray-200 dark:bg-gray-800 ${className}`}
      role="separator"
    />
  );
}
