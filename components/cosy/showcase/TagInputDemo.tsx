'use client';

import { useState } from 'react';
import { TagInput } from '../Form';

export function TagInputDemo() {
  const [groups, setGroups] = useState<string[]>(['test']);
  const [tags, setTags] = useState<string[]>(['vip', 'wholesale', 'returning']);
  return (
    <div className="grid gap-4 max-w-md">
      <TagInput
        label="Groups"
        helpHint="Customer segmentation groups"
        values={groups}
        onRemove={(v) => setGroups(groups.filter((g) => g !== v))}
        placeholder="Add group…"
      />
      <TagInput
        label="Tags"
        helpHint="Free-form labels"
        values={tags}
        onRemove={(v) => setTags(tags.filter((t) => t !== v))}
        placeholder="Add tag…"
      />
    </div>
  );
}
