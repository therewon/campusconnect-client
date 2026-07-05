import NotificationBadge from "../../features/notifications/components/NotificationBadge";

export default function Header() {

    return (

        <header className="header">

            <h2>CampusConnect</h2>

            <div className="header-right">

                <div className="notification">

                    🔔

                    <NotificationBadge/>

                </div>

                <div className="profile">

                    <div className="avatar">

                        M

                    </div>

                    <span>

                        Mirtalıb

                    </span>

                </div>

            </div>

        </header>

    );

}