import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './VenueDetailPage.css';

export default function VenueDetailPage() {
  const { id } = useParams();

  // Example static data
  const venueDetails = {
    tmlr: {
      name: 'Transactions on Machine Learning Research (TMLR)',
      editors: [
        'Gautam Kamath', 'Hugo Larochelle', 'Naila Murray', 'Nihar B. Shah'
      ],
      description: `
        TMLR is a venue for dissemination of machine learning research...
        It emphasizes technical correctness over subjective significance, 
        with rolling submission, short review cycles.
      `,
      tabs: [
        'Event Certifications', 'Accepted Papers', 'Accepted Papers with Video',
        'Under Review Submissions', 'All Submissions', 'Featured Certification'
      ],
      journalTracks: [
        'LoG 2024 Journal Track', 'RLC 2024 Journal Track', 'AutoML 2024 Journal Track'
      ]
    },
    computo: {
      name: 'Computo',
      editors: ['Editor Name'],
      description: 'Computo details coming soon.',
      tabs: [],
      journalTracks: []
    }
    // Add more as needed
  };

  const venue = venueDetails[id];

  if (!venue) return (
    <div className="venue-detail">
      <h2>Venue not found</h2>
      <Link to="/">← Back to Home</Link>
    </div>
  );

  return (
    <div className="venue-detail">
      <Link to="/">← Back to Home</Link>
      <h1>{venue.name}</h1>
      <h3>Editors-in-chief:</h3>
      <ul>
        {venue.editors.map((editor, index) => <li key={index}>{editor}</li>)}
      </ul>
      <p>{venue.description}</p>

      <div className="tabs">
        {venue.tabs.map((tab, index) => (
          <button key={index}>{tab}</button>
        ))}
      </div>

      <h3>Journal Tracks</h3>
      <ul>
        {venue.journalTracks.map((track, index) => (
          <li key={index}>
            <a href="#">{track}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
