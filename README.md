# NextLevelFood
https://next-level-food-mocha.vercel.app/

A Nextjs app demonstrating features of the App Router Nextjs patterns.

## Features

- **App Router** usage with structured folder-based routing  
- Custom **error handling** via `error.js` and `not-found.js` pages, including **loading states**  
- **Dynamic routes** and route parameters  
- **Image slideshow** component  
- React **Suspense** for improved loading UX  
- **Server and Client components** separation  
- **Server-side data fetching** with server components  
- **Server actions** integrated with forms using `useActionState()` and `useFormStatus()` for UI updates  
- **Path revalidation** with `revalidatePath` to override caching  
- **Static and dynamic metadata** generation  
- Mock database implemented with **better-sqlite**  
- **Local image storage** (requires external DB for deployment: Firebase, Supabase, AWS, etc.)

> Images are stored locally and will not load in deployed environments without an external database.



