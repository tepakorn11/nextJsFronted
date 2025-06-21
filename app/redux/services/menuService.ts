import { IMenu } from '@/interface/menu';
import ax from "@/utility/axios"

export const fetchMenuFromApi = async (): Promise<IMenu[]> => {
    const res = await ax.get<IMenu[]>('/menu', {
        params: {
            status: 'active',
        },
    })
    return res.data;

}
