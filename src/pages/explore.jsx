import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, Compass, BookMarked, Sparkles } from 'lucide-react';
import CategoryCard from '../components/CatergoryCard';
import ResourceCard from '../components/ResourceCard';
import { categoriesData, resourcesData, learningGuides } from '../data/resource';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  // Filter resources based on search and all filter criteria
  const filteredResources = useMemo(() => {
    return resourcesData.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
      const matchesPricing = selectedPricing === 'All' || item.pricing === selectedPricing;

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedPricing]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedPricing('All');
  };

  return (
    <div className="explore-page">
      {/* A. Page Introduction */}
      <section className="hero" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="status-dot"></span>
            CURATED LEARNING HUB
          </div>
          <h1 style={{ maxWidth: '700px' }}>
            Explore Top <span>Learning Resources</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '550px', marginTop: '16px' }}>
            Discover vetted courses, documentation, tutorials, and bootcamps to accelerate your software engineering and tech career journey.
          </p>
        </div>
      </section>

      {/* B. Search and Filters Bar */}
      <section className="container" style={{ position: 'relative', zIndex: 5, marginBottom: '60px' }}>
        <div className="search-box" style={{ flexWrap: 'wrap', gap: '15px' }}>
          {/* Keyword Search */}
          <div className="search-field" style={{ minWidth: '220px' }}>
            <Search className="search-icon" size={20} />
            <div>
              <label>SEARCH RESOURCES</label>
              <input 
                type="text" 
                placeholder="e.g. React, Python, Security..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Category Filter */}
          <div className="search-field" style={{ minWidth: '160px' }}>
            <div>
              <label>CATEGORY</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categoriesData.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Difficulty Filter */}
          <div className="search-field" style={{ minWidth: '140px' }}>
            <div>
              <label>DIFFICULTY</label>
              <select 
                value={selectedDifficulty} 
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
              </select>
            </div>
          </div>

          <div className="search-divider"></div>

          {/* Pricing Filter */}
          <div className="search-field" style={{ minWidth: '120px' }}>
            <div>
              <label>PRICING</label>
              <select 
                value={selectedPricing} 
                onChange={(e) => setSelectedPricing(e.target.value)}
              >
                <option value="All">Free & Paid</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
          </div>

          {/* Reset Button */}
          <button 
            className="btn btn-light" 
            onClick={handleResetFilters}
            style={{ padding: '10px 16px', fontSize: '13px', border: '1px solid var(--border)' }}
            title="Reset all filters"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </section>

      {/* C. Categories Section */}
      <section className="section-padding" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">DOMAINS</span>
              <h2>Browse by Category</h2>
              <p>Select a specific skill domain to quickly narrow down your focus.</p>
            </div>
            {selectedCategory !== 'All' && (
              <button 
                onClick={() => setSelectedCategory('All')} 
                className="view-link" 
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Show All Categories →
              </button>
            )}
          </div>

          <div className="category-grid">
            {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={selectedCategory === category.name}
              onSelectCategory={(catName) =>
              setSelectedCategory((prev) => (prev === catName ? 'All' : catName))
            }
    />
  ))}
</div>
        </div>
      </section>

      {/* D. Learning Resources Listing */}
      <section className="section-padding opportunities" id="resources-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">RECOMMENDED TOOLS</span>
              <h2>Learning Resources ({filteredResources.length})</h2>
              <p>Handpicked courses, documentation, and tutorials matching your filters.</p>
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <div className="opportunity-grid">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div style={{ 
              background: 'var(--white)', 
              borderRadius: 'var(--radius)', 
              padding: '60px 20px', 
              textAlign: 'center',
              border: '1px solid var(--border)'
            }}>
              <Compass size={48} style={{ color: 'var(--green)', marginBottom: '16px' }} />
              <h3 style={{ color: 'var(--navy)', fontSize: '20px', marginBottom: '8px' }}>No resources found</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto 20px' }}>
                We couldn't find any learning resources matching your current search or filter combination.
              </p>
              <button className="btn btn-primary" onClick={handleResetFilters}>
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* E. Learning Guides Section */}
      <section className="section-padding">
        <div className="container">
          <div className="center-heading">
            <span className="section-label">STRUCTURED PATHS</span>
            <h2>Recommended Learning Guides</h2>
            <p>Follow structured multi-week roadmaps designed to take you from fundamentals to project-ready confidence.</p>
          </div>

          <div className="opportunity-grid">
            {learningGuides.map((guide, index) => (
              <div key={index} className="step-card" style={{ background: 'var(--light-bg)' }}>
                <div className="step-number">0{index + 1}</div>
                <div className="step-icon"><BookMarked size={24} /></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--green)' }}>{guide.time}</span>
                  <span style={{ fontSize: '10px', background: 'var(--white)', padding: '2px 8px', borderRadius: '4px', color: 'var(--muted)' }}>{guide.level}</span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}