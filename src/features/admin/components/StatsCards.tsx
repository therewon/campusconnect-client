import { useAdminStats } from "../hooks/useAdminStats";

export function StatsCards() {
  const { data, isLoading } = useAdminStats();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 20,
      }}
    >
      <div>
        <h3>Users</h3>
        <p>{data.totalUsers}</p>
      </div>

      <div>
        <h3>Announcements</h3>
        <p>{data.totalAnnouncements}</p>
      </div>

      <div>
        <h3>Events</h3>
        <p>{data.totalEvents}</p>
      </div>

      <div>
        <h3>Comments</h3>
        <p>{data.totalComments}</p>
      </div>
    </div>
  );
}   