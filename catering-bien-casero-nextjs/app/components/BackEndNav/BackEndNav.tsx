import Link from "next/link";

export const BackEndNav = () => {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/orders">Orders</Link>
      <Link href="/dashboard/products">Products</Link>
      <Link href="/dashboard/customers">Customers</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  );
};
