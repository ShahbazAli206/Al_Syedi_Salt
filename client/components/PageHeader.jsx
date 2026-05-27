import Link from 'next/link';

export default function PageHeader({ title, crumb }) {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      <div className="breadcrumb"></div>
      <div className="crumbs">
        <Link href="/">Home</Link> / {crumb}
      </div>
    </header>
  );
}
