import { sql } from "@vercel/postgres";

export default async function Cart({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * FROM carts WHERE user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.user_id}>
          {row.user_id} | {row.user_name} | {row.year}
        </div>
      ))}
    </div>
  );
}
