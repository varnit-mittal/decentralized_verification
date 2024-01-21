import React from 'react';

const DashboardOrg = ({ orgName, numberOfPeople, issuedIds }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl mb-4">
        Welcome, {orgName}!
      </h2>
      <div className="text-left mb-4">
        <p>
          Number of People in the Organization: {numberOfPeople}
        </p>
      </div>
      <div className="text-left">
        <h3 className="text-xl mb-2">Issued IDs:</h3>
        <ul className="list-disc pl-4">
          {issuedIds.map((id) => (
            <li key={id}>
              {id.name} - {id.id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardOrg;
