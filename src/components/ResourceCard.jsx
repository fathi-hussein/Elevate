import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function ResourceCard({ resource }) {
  return (
    <div className="opportunity-card">
      <div className="opportunity-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div className="card-meta">
            <span>{resource.category}</span>
            <span style={{ 
              background: resource.pricing === 'Free' ? '#E6F5F0' : '#E8F0FF',
              color: resource.pricing === 'Free' ? 'var(--green)' : '#3157C8',
              padding: '2px 8px',
              borderRadius: '4px',
              fontWeight: '700'
            }}>
              {resource.pricing}
            </span>
          </div>
          
          <h3 style={{ minHeight: 'auto', marginBottom: '10px' }}>{resource.name}</h3>
          <p style={{ minHeight: 'auto', marginBottom: '20px' }}>{resource.description}</p>
        </div>

        <div className="card-footer" style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ background: 'var(--light-bg)', padding: '3px 8px', borderRadius: '4px' }}>
              {resource.difficulty}
            </span>
            <span style={{ background: 'var(--light-bg)', padding: '3px 8px', borderRadius: '4px' }}>
              {resource.type}
            </span>
          </div>
          <a 
            href={resource.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            Visit <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}