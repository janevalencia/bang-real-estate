import { useState, useEffect } from "react";
import { TProperty } from "@/types";
import PropertyCard from "./PropertyCard";
import Button from "./Button";

type GridPropertiesProps = {
    posts: TProperty[];
};

const GridProperties = ({ posts }: GridPropertiesProps) => {
    // Define state for showing posts.
    const [showPosts, setShowPosts] = useState<TProperty[]>([]);

    // Define state of hiding and showing load more button.
    const [showLoadMore, setShowLoadMore] = useState<boolean>(false);

    // Handle client-side re-rendering when posts are updated.
    useEffect(() => {
        // Show only 3 posts by default.
        setShowPosts(posts.filter((_, index) => index < 3));

        // Hide the load more button if there are less than 3 posts.
        if (posts.length > 3) {
            setShowLoadMore(true);
        } else {
            setShowLoadMore(false);
        }
    }, [posts]);

    // Handle load more button clicked.
    const handleLoadMore = () => {
        // Update the state of showing all posts.
        setShowPosts(posts);

        // Hide the load more button if all posts are shown.
        setShowLoadMore(false);
    };

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {showPosts &&
                    showPosts.map((post) => (
                        <PropertyCard key={post.slug} post={post} />
                    ))}
            </div>
            <div className="flex justify-center w-full mt-8">
                {showLoadMore && (
                    <Button
                        text="Load more"
                        onClick={handleLoadMore}
                        isDark={true}
                    />
                )}
            </div>
        </section>
    );
};

export default GridProperties;