import './style.scss';
type ContainerProps = {
    children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
    return <div className="">{children}</div>;
};
