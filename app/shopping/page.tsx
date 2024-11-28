import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page"; 
import Header from "@/props/page";
import UserProfile from "../multi-props/page";

export default function Page() {
    return (
        <div>
            <UserProfile name="Kob" age={20} email="kob@me.com"></UserProfile>
            <div>Header and Props</div>
            <Header title="Kob" />
            <div>My Product from Client</div>
            <ClientComponent />
        </div>
    )
}