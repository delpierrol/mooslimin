export async function getProductLists(
    sortBy = 'id',
    sort = 'desc',
    perPage = 4,
    filters = { 'status': 1, 'is_website': 1 }
) {
    const res = await fetch(`${process.env.API_PRODUCT}/lists`, {
        method: 'POST',
        body: new URLSearchParams({
            page: 1,
            per_page: perPage,
            sort_by: sortBy,
            sort: sort,
            filter: JSON.stringify(filters),
        }),
        headers: {
            'MOOS-PLATFORM': 'MOOS-WEB'
        },
        next: {
            revalidate: 3600
        }
        // cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const resApi = await res.json();

    if (resApi.code != 200) {
        throw new Error('Failed to fetch data');
    }

    return resApi;
}

export async function getProductDetail(slug) 
{
    const res = await fetch(`${process.env.API_PRODUCT}/slug/${slug}`,{
        headers: {
            'MOOS-PLATFORM': 'MOOS-WEB'
        },
        // next: {
        //     revalidate: 5
        // }
        // cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const resApi = await res.json();

    if (resApi.code != 200) {
        throw new Error('Failed to fetch data');
    }

    return resApi;
}