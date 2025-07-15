import VenueListSection from '../Venues/VenueListSection';
import './MainSection.css';

export default function MainSection() {
  const activeVenues = [
    { id: 'tmlr', name: 'TMLR' },
    { id: 'computo', name: 'Computo' },
    { id: 'dmlr', name: 'DMLR' },
  ];

  const openForSubmissions = [
    { id: 'iccv2025', name: 'ICCV 2025 Workshop VQuaIA' },
    { id: 'acmmm2025', name: 'ACMMM 2025 Workshop AOCV' },
  ];

  const allVenues = [
    { id: '2021', name: '2021' },
    { id: '2024', name: '2024' },
    { id: '3dv', name: '3DV' },
  ];

  return (
    <main className="main-section">
      <div className="venue-sections">
        <VenueListSection title="Active Venues" venues={activeVenues} />
        <VenueListSection title="Open for Submissions" venues={openForSubmissions} />
      </div>
      <VenueListSection title="All Venues" venues={allVenues} />
    </main>
  );
}
