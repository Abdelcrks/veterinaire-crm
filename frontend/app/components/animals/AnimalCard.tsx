import Link from 'next/link';
import type { Animal } from '@/types';

export const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <Link
      href={`/animals/${animal.id}`}
      className="block p-4 border rounded-lg hover:bg-gray-50 transition"
    >
      <p className="font-semibold">{animal.firstName}</p>
      <p className="text-sm ">
        {animal.species} — {animal.age} ans
      </p>
    </Link>
  )
}