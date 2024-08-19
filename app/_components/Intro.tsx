import Title from "./Title";

type IntroProps = {
    title: string;
    children?: React.ReactNode;
};

const Intro = ({ title, children }: IntroProps) => {
    return (
        <section className="col-span-10 grid grid-cols-10 flex-col gap-y-12 items-center pt-22 pb-11">
            <Title className="col-span-10">{title}</Title>
            {children && (
                <div className="text-2xl col-span-8 col-start-2 text-center flex flex-col gap-12">
                    {children}
                </div>
            )}
        </section>
    );
};

export default Intro;
