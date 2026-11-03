import { useState } from 'react';

export function projectCoverUrl(owner, repo, branch = 'HEAD') {
  return `https://raw.githubusercontent.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/${encodeURIComponent(branch)}/src/assets/images/coverImage.png`;
}

export default function ProjectCover({ src, title, className = '' }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!src || failedSrc === src) return null;

  return (
    <img
      src={src}
      alt={`Screenshot of ${title}`}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setFailedSrc(src)}
    />
  );
}
