import { Owner } from "@/app/lib/types"
import Link from "next/link"

export const OwnerList = ({owners}: {owners: Owner[]}) => {
    if (owners.length === 0) {
        return (
            <main>
                <h1>Propriétaires</h1>
                <p>Aucun Propriétaire enregistré</p>
            </main>
        )
    }

    return (
        <main className="max-w-2xl mx-auto pt-8 px-4">
            <div>
                <h2 className="text-2xl font-bold mb-6">Propriétaires</h2>
                <div className="grid grid-cols-1 gap-4">
                {owners.map((owner) => (
                    <Link
                    key={owner.id}
                    href={`/owners/${owner.id}`}
                    className="block p-4 border rounded-lg hover:shadow-lg transition"
                    >
                    <p className="font-semibold">
                        {owner.civility} {owner.firstName} {owner.lastName}
                    </p>
                    <p className="text-sm">
                    {owner.animals.length === 0 ? 'Aucun animal' : `${owner.animals.length} ${owner.animals.length > 1 ? 'animaux' : 'animal'}`}
                    </p>
                    </Link>
                ))}
                </div>
            </div>
        </main>
    )
}