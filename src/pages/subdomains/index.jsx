import { useState, useEffect } from 'react';
import { getSubdomain } from '../utils/getSubdomain';
import { subdomainPages } from './data';

export default function SubdomainPage() {
  const subdomain = getSubdomain();
  const data = subdomainPages[subdomain];

  const [SubdomainComponent, setSubdomainComponent] = useState(null);

  useEffect(() => {
    async function loadComponent() {
      try {
        const module = await import(`../${subdomain}.jsx`);
        setSubdomainComponent(() => module.default);
      } catch (err) {
        console.warn(`No individual component found for subdomain "${subdomain}"`);
        setSubdomainComponent(null);
      }
    }

    if (data) {
      loadComponent();
    }
  }, [subdomain]);

  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">404 - Subdomain Not Found</h1>
        <p>The subdomain "{subdomain}" is not configured.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {SubdomainComponent ? (
        <SubdomainComponent />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
          <p className="mb-4">{data.description}</p>
          <div className="text-3xl mt-4">{data.example}</div>
        </>
      )}
    </div>
  );
}
