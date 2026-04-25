import { AnimalDetail } from '@/app/components/animals/AnimalDetail';
import type { AnimalWithOwner } from '@/app/lib/types';

const getAnimal = async (id: string): Promise<AnimalWithOwner | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/animals/${id}`,{
        cache: 'no-store' 
    })

    if (!response.ok){
        return null
    }
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function AnimalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const animal = await getAnimal(id);

  if (!animal) {
    return (
        <p className="p-6">Animal introuvable.</p>
    )
  }

  return <AnimalDetail animal={animal} />
}