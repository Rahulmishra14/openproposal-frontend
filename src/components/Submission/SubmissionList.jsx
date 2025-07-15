import React from 'react';
import SubmissionItem from './SubmissionItem';
import './SubmissionList.css';

export default function SubmissionList({ items }) {
  return (
    <section className="or-submissions">
      <h2 className="or-section-title">Open for Submissions</h2>
      <div className="or-cards">
        {items.map(item => <SubmissionItem key={item.id} item={item} />)}
      </div>
    </section>
  );
}
