type ContentProps = {
    children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
    return <div className="flex flex-col gap-4">{children}</div>;
};

export default Content;
