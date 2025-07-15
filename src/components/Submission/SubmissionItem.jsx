import React from 'react';
import './SubmissionItem.css';

export default function SubmissionItem({ item }) {
  return (
    <div className="or-card">
      <h3 className="or-card-title">{item.title}</h3>
      <p className="or-card-due">Deadline: {item.due}</p>
    </div>
  );
}
