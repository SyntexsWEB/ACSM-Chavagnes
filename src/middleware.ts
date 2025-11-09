import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Rediriger /admin vers /admin/
  if (pathname === '/admin') {
    return context.redirect('/admin/', 301);
  }

  return next();
});
