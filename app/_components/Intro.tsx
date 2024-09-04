import Title from "./Title";

type IntroProps = {
    title: string;
    children?: React.ReactNode;
};

const Intro = ({ title, children }: IntroProps) => {
    return (
        <section className="col-span-10 grid grid-cols-10 flex-col gap-y-12 items-center pt-8 pb-11">
            <Title className="col-span-10">{title}</Title>
            {children && (
                <div className="max-md:text-intro text-xl max-sm:col-span-10 col-span-8 col-start-2 text-center flex flex-col gap-12 leading-normal">
                    {children}
                </div>
            )}
        </section>
    );
};

export default Intro;
