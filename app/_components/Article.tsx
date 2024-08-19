type ArticleProps = {
    children: React.ReactNode;
};

const Article = ({ children }: ArticleProps) => {
    return (
        <article className="flex flex-col col-span-10 gap-12 text-darkest-blue">
            {children}
        </article>
    );
};

export default Article;
