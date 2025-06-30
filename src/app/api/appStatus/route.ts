export async function GET(request: Request) {
    const url = new URL(request.url).searchParams.get('url')
    if (!url) {
        return new Response(JSON.stringify({ online: false }))
    }
    const response = await fetch(url)
    return new Response(JSON.stringify({ online: response.ok }))
}