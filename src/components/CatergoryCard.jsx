import React from 'react';
import * as Icons from 'lucide-react';

export default function CategoryCard({ category, isActive, onSelectCategory }) {
  const IconComponent = Icons[category.iconName] || Icons.Compass;

  return (
    <div
      className={`category-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelectCategory(category.name)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectCategory(category.name);
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className={`category-icon ${category.colorClass}`}>
        <IconComponent size={24} />
      </div>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <span className="card-link">
        {isActive ? 'Selected (Click to clear)' : 'Explore Resources →'}
      </span>
    </div>
  );
}