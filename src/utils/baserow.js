import axios from "@/libs/axios"

/**
 * Retreive all Baserow table data recursively regardless of the pagination.
 */
export async function getTable({ results, nextPage }) {
    if (nextPage) {
        const { data } = await axios.get(nextPage)
        // As long as there is a paginated result, merge current with previous data
        const mergedResults = [...results, ...data.results]
        const next = data.next
            ?.replace("http://", "https://")
            .split(import.meta.env.VITE_BASEROW_API_URL)[1]

        return await getTable({ results: mergedResults, nextPage: next })
    }
    return { results, nextPage }
}

/**
 * Retrieve table data of the given page.
 */
export async function getTablePage({ page }) {
    const { data } = await axios.get(page)
    return data
}
