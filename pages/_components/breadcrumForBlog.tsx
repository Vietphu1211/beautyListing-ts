import React from 'react';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  const { pathname } = router;

  const crumbs = pathname.split('/').filter(crumb => crumb); // Loại bỏ chuỗi rỗng

  const breadcrumbItems = crumbs.map((crumb, index) => {
    const href = `/${crumbs.slice(0, index + 1).join('/')}`;
    return (
      <li key={index} className={`breadcrumb-item ${index === crumbs.length - 1 ? 'active' : ''}`}>
        {index === crumbs.length - 1 ? (
          <span>{crumb}</span>
        ) : (
          <a href={href}>{crumb}</a>
        )}
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{breadcrumbItems}</ol>
    </nav>
  );
};

export default Breadcrumb;