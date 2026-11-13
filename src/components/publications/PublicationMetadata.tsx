'use client';

import type { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';

export default function PublicationMetadata({ publication }: { publication: Publication }) {
  const { publications: labels } = useMessages();
  const authorPosition = publication.authorPosition;

  return (
    <div className="mb-3 space-y-2">
      <p className="text-sm text-neutral-600 dark:text-neutral-500">
        {publication.journal || publication.conference}
        {publication.year && <span> · {publication.year}</span>}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {authorPosition && (
          <span className="rounded-md bg-accent/10 px-2 py-1 text-accent-dark dark:text-accent">
            {labels.authorPositions[authorPosition] || `${labels.authorPosition}: ${authorPosition}`}
          </span>
        )}
        <span className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500">
          {labels.statuses[publication.status]}
        </span>
      </div>
    </div>
  );
}
