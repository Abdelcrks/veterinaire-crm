import { speciesLabels } from '@/app/lib/species';
import { AnimalWithOwner } from '@/app/lib/types';
import Link from 'next/link';

export const AnimalDetail = ({ animal }: { animal: AnimalWithOwner }) => {
  return (
    <div className="max-w-2xl mx-auto pt-8 px-4">
      <Link href={`/owners/${animal.owner.id}`} className="text-sm hover:underline mb-6 block">
        Retour au propriétaire
      </Link>

      <h2 className="text-2xl font-bold mb-6">{animal.firstName}</h2>

      <div className="border rounded-lg p-4 space-y-2">
        <p><span className="font-semibold">Espèce : </span>{speciesLabels[animal.species] ?? animal.species}</p>
        <p><span className="font-semibold">Âge : </span> {animal.age} ans</p>
        <p><span className="font-semibold">Taille : </span> {animal.height} cm</p>
        <p><span className="font-semibold">Poids : </span> {animal.weight} kg</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Propriétaire</h3>
      <Link
        href={`/owners/${animal.owner.id}`}
        className="block p-4 border rounded-lg hover:shadow-lg transition"
      >
        <p className="font-semibold">
          {animal.owner.civility} {animal.owner.firstName} {animal.owner.lastName}
        </p>
        <p className="text-sm">{animal.owner.email}</p>
      </Link>
    </div>
  )
}