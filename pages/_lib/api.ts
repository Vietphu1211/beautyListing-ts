const API_URL = process.env.WORDPRESS_API_URL || "";



async function fetchAPI(query="", {variables}: Record<string, any> = {}) {
        const headers = {"Content-Type": "application/json"};

        if(process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
            headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
        }

        // WPGRAPHQL PLUGIN MUST BE ENABLED
        const res = await fetch(API_URL, {
            headers,
            method:"POST",
            body: JSON.stringify({
                query,
                variables
            })
        });

        const json = await res.json();
        if(json.error) {
            console.error(json.errors);
            throw new Error("Failed to fetch API");
        }
        return json.data;

    }



export async function getAllPostForHome(preview) {
    const data = await fetchAPI(
        `
        query AllPosts {
            posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                node {
                  title
                  excerpt
                  slug
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  author {
                    node {
                      name
                      firstName
                      lastName
                      avatar {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `, {
            variables: {
                onlyEnabled: !preview,
                preview
            },
        },
    );
    return data?.posts;
}