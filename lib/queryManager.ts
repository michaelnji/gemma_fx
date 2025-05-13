export const queries = {
    post: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      post_type->{title},
     
      excerpt,
      "authorInfo": author-> {
        slug,
        name,
        bio,
        "imageUrl": image.asset->url,
        twitter
      },
      "category": category->{
        title,
        icon
      },
      "tags": tags[]->{
        title,
        description
      },
      publishedAt,
      slug,
      title,
      _updatedAt,
      "imageUrl": mainImage.asset->url
    },
    body
  `,
  couponCodes:`*[_type == "coupon_codes"] | order(publishedAt desc){
  "slug":slug.current,
    name,
    code,
    link,
    status,
    publishedAt,
    perks,
    software_url,
    software_type
}`,
    authors: `*[_type == "author"]`,
  tags: `*[_type == "tag"]{title}`,
    categories: `*[_type == "category"]`,
    postsSummary: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
    post_type->{title},
    excerpt,
    "authorInfo":author-> {slug,name,bio,"imageUrl":image.asset->url},
    "tags":tags[]->{title},
    publishedAt,
    slug,
    "category":category->{title},
    title,
    _updatedAt,
    "imageUrl": mainImage.asset->url
    }
  `
};

export const buildPostSummarizedQuery = (post_type: string, category: string) => {
    return `*[_type == "post" && post_type->title == "${post_type}" && category->title == "${category}"] | order(publishedAt desc){
    _id,   
    post_type->{title},
    excerpt,
    "authorInfo":author-> {slug,name,bio,"imageUrl":image.asset->url},
    "tags":tags[]->{title},
    publishedAt,
    slug,
    "category":category->{title},
    title,
    _updatedAt,
    "imageUrl": mainImage.asset->url
}`;

}
export const buildPostBySlugQuery = (slug: string) => {
  return `*[_type == "post" && slug.current == "${slug}"][0]{
        _id,
      post_type->{title},
     
      excerpt,
      "authorInfo": author-> {
        slug,
        name,
        bio,
        "imageUrl": image.asset->url,
        twitter
      },
      "category": category->{
        title,
        icon
      },
      "tags": tags[]->{
        title,
        description
      },
      publishedAt,
      slug,
      title,
      _updatedAt,
      "imageUrl": mainImage.asset->url,
    body
    }`;
}

