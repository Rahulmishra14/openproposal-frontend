import React from 'react';
import { Link } from 'react-router-dom';
import './VenueListSection.css';

export default function VenueListSection({ title, venues }) {
  return (
    <section className="venue-list-section">
      <h2>{title}</h2>
      <ul>
        {venues.map(v => (
          <li key={v.id}>
            <Link to={`/venue/${v.id}`}>{v.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
