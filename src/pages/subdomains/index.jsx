import { getSubdomain } from '../utils/getSubdomain';
import { subdomainPages } from './data';

export default function SubdomainPage() {
  const subdomain = getSubdomain();
  const data = subdomainPages[subdomain];

  if (!data) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>404 - Subdomain Not Found</h1>
        <p>The subdomain "{subdomain}" is not configured.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p style={{ fontSize: "2rem", marginTop: "1rem" }}>{data.example}</p>
    </div>
  );
}
