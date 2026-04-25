import Link from 'next/link';
import type { Owner } from '@/types';
import { AnimalCard } from '../animals/AnimalCard';

export const OwnerDetail = ({ owner }: { owner: Owner }) => {
  return (
    <div className="max-w-2xl mx-auto pt-8 px-4">
      <Link href="/owners" className="text-sm hover:underline mb-6 block">
        Retour aux propriétaires
      </Link>

      <h2 className="text-2xl font-bold mb-2">
        {owner.civility} {owner.firstName} {owner.lastName}
      </h2>
      <p className="mb-1">Email : {owner.email}</p>
      <p className="mb-6">Numéro de téléphone : {owner.phone}</p>

      <h3 className="text-xl font-semibold mb-4">Animaux</h3>
      {owner.animals.length === 0 ? (
        <p>Aucun animal enregistré.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {owner.animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  )
}