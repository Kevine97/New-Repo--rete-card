import { Container } from '../UI/Organisms/Container';
import Header from '../UI/Organisms/Header/Header';
import Sidebar from '../UI/Organisms/Sidebar/Sidebar';
import './style.scss';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout-container">
            <Sidebar></Sidebar>
            <main className="main">
                <Header></Header>
                <div className="main-content">
                    <Container>{children}</Container>
                </div>
            </main>
        </div>
    );
};
