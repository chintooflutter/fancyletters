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
      <div style={{ padding: "2rem" }}>
        <h1>404 - Subdomain Not Found</h1>
        <p>The subdomain "{subdomain}" is not configured.</p>
      </div>
    );
  }

  if (SubdomainComponent) {
    return <SubdomainComponent />;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p style={{ fontSize: "2rem", marginTop: "1rem" }}>{data.example}</p>
    </div>
  );
}
