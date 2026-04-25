import Link from 'next/link';
import type { Animal } from '@/app/lib/types';
import { speciesLabels } from '@/app/lib/species';

export const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <Link
      href={`/animals/${animal.id}`}
      className="block p-4 border rounded-lg hover:shadow-lg transition"
    >
      <p className="font-semibold">{animal.firstName}</p>
      <p className="text-sm ">
        {speciesLabels[animal.species] ?? animal.species} {animal.age} ans
      </p>
    </Link>
  )
}