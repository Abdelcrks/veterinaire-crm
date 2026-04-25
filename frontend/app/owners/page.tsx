import { Owner } from "@/types";
import { OwnerList } from "../components/owners/OwnerList";

export const getOwners = async (): Promise<Owner[]> => {
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
}

export default async function OwnersPage () {
    const owners = await getOwners()
    return (
        <OwnerList owners={owners}/>
    )
}