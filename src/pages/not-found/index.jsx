import { PageSkeleton } from "../../components/page-skeleton";

export const NotFound = () => {
    const toMain = () => {
        if (window.history.length === 1) {
            window.open('./', '_self');
        } else {
            window.history.back();
        }
    }
    return (
        <PageSkeleton>
            <div style={{ fontSize: '4rem', padding: '4rem' }}>
                Page not found
                <div style={{ color: '#EC008C', cursor: 'pointer' }} onClick={toMain}>
                    Go back
                </div>
            </div>
        </PageSkeleton>
    );
};