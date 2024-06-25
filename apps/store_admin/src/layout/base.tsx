export type BaseLayoutProps = {
    children: React.ReactNode;
}
export default function BaseLayout({ children }: BaseLayoutProps) {


    return (
        <div className="h-screen flex flex-col m-0 p-0 bg-[#f1f5f9] overflow-auto ">
            { children }
        </div>
    );
}