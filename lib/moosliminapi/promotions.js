export async function getBanner( promotion_type = 'main_banner', perPage = 5 ) {
    const res = await fetch(`${process.env.API_USER}/promotions`, {
        method: 'POST',
        body: new URLSearchParams({
            page: 1,
            per_page: perPage,
            sort_by: 'sort',
            sort: 'asc',
            filter: JSON.stringify({ "status": "1", "promotion_type": promotion_type }),
        }),
        headers: {
            'MOOS-PLATFORM': 'MOOS-WEB'
        },
        next: {
            revalidate: 5
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const resApi = await res.json();

    if (resApi.code != 200) {
        throw new Error('Failed to fetch data');
    }

    return resApi;
}