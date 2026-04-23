import { Badge } from '@/components/ui/badge';
import type { Tag } from '@/lib/types';

export default function TagBadge({ tag }: { tag: Tag }) {
  return (
    <Badge variant="secondary" className="text-xs font-mono">
      {tag.name}
    </Badge>
  );
}
