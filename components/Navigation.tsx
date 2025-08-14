"use client";

import {useState} from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    {id: "about", label: "About"},
    {id: "projects", label: "Projects"},
    {id: "blogs", label: "Blogs"},
    {id: "github", label: "GitHub"},
    {id: "contact", label: "Contact"},
  ];

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg min-w-[120px]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 first:rounded-t-md last:rounded-b-md transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
