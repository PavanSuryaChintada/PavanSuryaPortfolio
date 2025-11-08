# Skeleton Loading - Quick Reference

## 🚀 Quick Start

```tsx
import { usePageLoading } from '@/hooks/use-page-loading';
import { SkeletonMainContent } from '@/components/skeletons';

const YourComponent = () => {
  const { isLoading } = usePageLoading(true, 1500);
  
  if (isLoading) return <SkeletonMainContent />;
  
  return <YourActualContent />;
};
```

## 📦 Available Skeleton Components

| Component | Use For | Import |
|-----------|---------|--------|
| `SkeletonLeftSidebar` | Navigation sidebar | `import { SkeletonLeftSidebar } from '@/components/skeletons'` |
| `SkeletonRightSidebar` | Profile sidebar | `import { SkeletonRightSidebar } from '@/components/skeletons'` |
| `SkeletonPlayerBar` | Bottom player | `import { SkeletonPlayerBar } from '@/components/skeletons'` |
| `SkeletonMainContent` | Full page content | `import { SkeletonMainContent } from '@/components/skeletons'` |
| `SkeletonCard` | Content cards | `import { SkeletonCard } from '@/components/skeletons'` |

## 🎨 CSS Classes

| Class | Purpose | Usage |
|-------|---------|-------|
| `.skeleton-shimmer` | Shimmer animation | `<div className="skeleton-shimmer" />` |
| `.skeleton-pulse` | Pulse animation | `<div className="skeleton-pulse" />` |
| `.skeleton` | Base skeleton | `<div className="skeleton w-32 h-8" />` |
| `.skeleton-text` | Text line (1rem) | `<div className="skeleton-text w-3/4" />` |
| `.skeleton-text-sm` | Small text (0.75rem) | `<div className="skeleton-text-sm w-1/2" />` |
| `.skeleton-circle` | Circular shape | `<div className="skeleton-circle w-12 h-12" />` |

## 🔧 Hook API

```tsx
const {
  isLoading,      // boolean - current loading state
  startLoading,   // () => void - start loading
  stopLoading,    // () => void - stop loading  
  setIsLoading    // (boolean) => void - set loading state
} = usePageLoading(
  initialLoading,   // boolean, default: true
  minLoadingTime    // number (ms), default: 1500
);
```

## 💡 Common Patterns

### Pattern 1: Simple Loading
```tsx
const { isLoading } = usePageLoading(true, 1500);
if (isLoading) return <SkeletonMainContent />;
return <Content />;
```

### Pattern 2: With Data Fetching
```tsx
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetchData()
    .then(setData)
    .finally(() => setIsLoading(false));
}, []);
```

### Pattern 3: Manual Control
```tsx
const { startLoading, stopLoading } = usePageLoading(false);

const handleRefresh = async () => {
  startLoading();
  await fetchData();
  stopLoading();
};
```

### Pattern 4: Layout Level
```tsx
<DesktopLayout isLoading={isLoading}>
  <YourPage />
</DesktopLayout>
```

## ⏱️ Recommended Loading Times

- **Fast**: 500-800ms (quick operations)
- **Normal**: 1000-1500ms (standard pages)
- **Slow**: 1500-2000ms (heavy data)

## 🎯 Custom Skeleton Template

```tsx
const CustomSkeleton = () => (
  <div className="space-y-4 p-4">
    {/* Image */}
    <div className="w-full h-48 bg-[#282828] rounded skeleton-shimmer" />
    
    {/* Title */}
    <div className="h-6 bg-[#282828] rounded w-3/4 skeleton-shimmer" />
    
    {/* Text lines */}
    <div className="h-4 bg-[#282828] rounded w-full skeleton-shimmer" />
    <div className="h-4 bg-[#282828] rounded w-5/6 skeleton-shimmer" />
    
    {/* Button */}
    <div className="h-10 bg-[#282828] rounded w-32 skeleton-shimmer" />
  </div>
);
```

## 🎨 Color Reference

- **Skeleton BG**: `#282828` or `hsl(0 0% 16%)`
- **Shimmer Light**: `hsl(0 0% 20%)`
- **Base Dark**: `hsl(0 0% 16%)`

## ✅ Implementation Checklist

- [ ] Import `usePageLoading` hook
- [ ] Import required skeleton components
- [ ] Add loading state to component
- [ ] Implement conditional rendering
- [ ] Set appropriate loading duration
- [ ] Test loading state transitions
- [ ] Verify skeleton matches actual layout

## 🔗 File Locations

```
src/
├── hooks/use-page-loading.tsx
├── components/skeletons/
│   ├── index.ts
│   ├── SkeletonCard.tsx
│   ├── SkeletonLeftSidebar.tsx
│   ├── SkeletonMainContent.tsx
│   ├── SkeletonRightSidebar.tsx
│   └── SkeletonPlayerBar.tsx
├── layouts/DesktopLayout.tsx
└── index.css
```

## 📚 Full Documentation

For detailed information, see `SKELETON_LOADING_GUIDE.md`
