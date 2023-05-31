const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (!API_URL) {
    const url_error = "No environment variable provided for API url.";
    console.error(url_error);
    throw new Error(url_error);
  }

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API.");
  }

  return json.data;
}

export async function getPages() {
  const data = await fetchAPI(`
    {
      pages(first: 20) {
        edges {
          node {
            title
            id  
          }
        }
      }
    }
  `);

  return data?.pages;
}
