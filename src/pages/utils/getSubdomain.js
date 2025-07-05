export function getSubdomain() {
    const host = window.location.hostname;
    const baseDomain = "fancyletters.org";
  
    if (host.endsWith(baseDomain)) {
      const sub = host.replace(`.${baseDomain}`, '');
      if (sub && sub !== 'www' && sub !== 'fancyletters') {
        return sub;
      }
    }
  
    return null;
  }
  