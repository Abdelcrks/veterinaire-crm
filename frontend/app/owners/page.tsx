import { OwnerList } from "../components/owner/OwnerList";

export type Animal = {
    id: number;
    firstName: string;
    species: string;
}

export type Owner = {
    id: number;
    civility: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    animals: Animal[];
}

const getOwners = async (): Promise<Owner[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/owners`, {
            cache: 'no-store'
        })
        if (!response.ok){
            throw new Error("Failed to fetch owners")
        }
        return response.json()
    } catch (error) {
        console.error(error)
        return []
    }
};

export default async function OwnersPage () {
    const owners = await getOwners()
    return (
        <OwnerList owners={owners}/>
    )
}