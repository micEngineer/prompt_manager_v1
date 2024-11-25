import React from 'react';
import type { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export function CategoryList({ categories, selectedCategory, onCategorySelect }: CategoryListProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold mb-4">カテゴリー</h2>
      <button
        onClick={() => onCategorySelect(null)}
        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
          selectedCategory === null
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-100'
        }`}
      >
        すべて
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.id)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
            selectedCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          <span
            className="inline-block w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: category.color }}
          />
          {category.name}
        </button>
      ))}
    </div>
  );
}