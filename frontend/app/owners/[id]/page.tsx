import { OwnerDetail } from "@/app/components/owners/OwnerDetail";
import { Owner } from "@/types";

const getOwner = async (id:string) :Promise<Owner | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owners/${id}`,{
            cache: 'no-store'
        })

        if(!response.ok){
            return null
        }
        return response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

export default async function OwnerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const owner = await getOwner(id)

  if (!owner) {
    return <p className="p-6">Propriétaire introuvable.</p>
  }

  return <OwnerDetail owner={owner} />
}