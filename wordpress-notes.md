Create a category for each page, and then create paragraph, list, and photo content for each category.

This is the GQL query to retrieve the content:

{
categories {
nodes {
name
posts {
nodes {
title
content
}
}
}
}
}

The content is gross-looking; will need to use regexes to get the content.

Directions for non-technical user:
