import { SideNav, Breadcrumbs } from "./app/ui";
import { AppRouter } from "./router/AppRouter"

export const App = () => {
    return (
        <div className="flex h-dvh">
            <div className="flex">
                <SideNav/>
            </div>
            <div className="flex h-dvh w-dvw flex-col p-4">
                <Breadcrumbs />
                <AppRouter />
            </div>
        </div>
)
};