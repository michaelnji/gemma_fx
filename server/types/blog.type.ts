export type Tag = {
    title: string
}
export interface Post {
    imageUrl: string;
    excerpt: string;
    post_type: {
        title: string
    };
    authorInfo: {
        slug: {
            current: string;
            _type: string;
        };
        imageUrl: string;
        name: string;
        bio: Array<{
            _type: string;
            style: string;
            _key: string;
            markDefs: unknown[];
            children: Array<{
                _type: string;
                marks: unknown[];
                text: string;
                _key: string;
            }>;
        }>;
        image: {
            asset: {
                _ref: string;
                _type: string;
            };
            _type: string;
        };
    };
    tags: Array<{
        title: string;
    }>;
    publishedAt: string;
    category: {
        title: string;
        icon: string
    };
    title: string;
    _updatedAt: string;
    _id: string;
    slug: {
        current: string;
        _type: string;
    };
    body: unknown[]
}
