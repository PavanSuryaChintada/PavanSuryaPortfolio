# SkeletonExperienceSelector - Integration Guide

## Overview

The `SkeletonExperienceSelector` component provides a loading state for the "Choose Your Experience" profile selection screen. It perfectly matches the layout of the `ProfileSelector` component with dark theme styling and shimmer animation.

## Component Structure

The skeleton replicates:
- **Heading**: Dark gray rounded bar (`#282828`) with responsive width
- **4 Profile Cards**: Vertical cards with 3:4 aspect ratio
  - Circular icon placeholder (64px diameter)
  - Text label placeholder below

## Visual Specifications

| Element | Dimensions | Color | Animation |
|---------|-----------|-------|-----------|
| Heading Bar | Width: 300-600px (responsive), Height: 40-64px | `#282828` | Shimmer |
| Card Container | Max-width: 200px, Aspect ratio: 3:4 | `#282828` | Shimmer |
| Icon Circle | 64px × 64px | `#1a1a1a` | None |
| Text Bar | Width: 75%, Height: 20px | `#1a1a1a` | None |

## Implementation

### Option 1: Integrate into ProfileSelector Component (Recommended)

Modify `ProfileSelector.tsx` to include loading state:

```tsx
import React, { useState } from 'react';
import { Briefcase, Eye, Code, Mountain } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { usePageLoading } from '@/hooks/use-page-loading';
import { SkeletonExperienceSelector } from '@/components/skeletons';

const ProfileSelector: React.FC = () => {
  const { setSelectedProfile } = useAppContext();
  const [isExiting, setIsExiting] = useState(false);
  
  // Add loading state (500-800ms for quick appearance)
  const { isLoading } = usePageLoading(true, 600);

  const handleProfileSelect = (profile: 'recruiter' | 'stalker' | 'developer' | 'adventurer') => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProfile(profile);
    }, 400);
  };

  const profiles = [
    { id: 'recruiter' as const, title: 'Recruiter', icon: <Briefcase size={48} /> },
    { id: 'stalker' as const, title: 'Stalker', icon: <Eye size={48} /> },
    { id: 'developer' as const, title: 'Developer', icon: <Code size={48} /> },
    { id: 'adventurer' as const, title: 'Adventurer', icon: <Mountain size={48} /> },
  ];

  // Show skeleton while loading
  if (isLoading) {
    return <SkeletonExperienceSelector />;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-base transition-smooth-400 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-text-base font-bold mb-[5vh] text-center px-4" 
          style={{ fontSize: 'clamp(32px, 3.5vw, 56px)', letterSpacing: '-0.04em' }}>
        Choose Your Experience
      </h1>
      <div className="flex gap-[2vw] justify-center px-4 max-w-6xl">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            title={profile.title}
            icon={profile.icon}
            onClick={() => handleProfileSelect(profile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSelector;
```

### Option 2: Integrate at Index Level

Alternatively, handle loading at the parent level in `Index.tsx`:

```tsx
import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useLocation } from 'react-router-dom';
import ProfileSelector from '@/components/ProfileSelector';
import { SkeletonExperienceSelector } from '@/components/skeletons';
import { usePageLoading } from '@/hooks/use-page-loading';
// ... other imports

const Index = () => {
  const { hasSelectedProfile } = useAppContext();
  const isMobile = useIsMobile();
  const location = useLocation();
  const [showApp, setShowApp] = useState(false);
  
  // Add loading state for profile selector
  const { isLoading: isProfileLoading } = usePageLoading(true, 600);
  const { isLoading: isAppLoading } = usePageLoading(true, 1500);

  useEffect(() => {
    if (hasSelectedProfile) {
      setShowApp(true);
    }
  }, [hasSelectedProfile]);

  // Show profile selector skeleton
  if (!showApp && isProfileLoading) {
    return <SkeletonExperienceSelector />;
  }

  // Show actual profile selector
  if (!showApp) {
    return <ProfileSelector />;
  }

  const Layout = isMobile ? MobileLayout : DesktopLayout;
  
  // Route content...
  let content;
  switch (location.pathname) {
    // ... routes
  }

  return (
    <Layout isLoading={isAppLoading}>
      {content}
    </Layout>
  );
};

export default Index;
```

### Option 3: Standalone Usage

Use directly in any component:

```tsx
import { SkeletonExperienceSelector } from '@/components/skeletons';

const YourComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SkeletonExperienceSelector />;
  }

  return <ProfileSelector />;
};
```

## Loading Duration Recommendations

Since this is the first screen users see, keep loading time short:

| Scenario | Duration | Reason |
|----------|----------|--------|
| **Initial Load** | 500-800ms | Quick first impression |
| **Data Fetching** | 800-1200ms | Waiting for user data |
| **Slow Network** | 1200-1500ms | Maximum acceptable wait |

**Recommended**: 600ms for optimal UX

```tsx
const { isLoading } = usePageLoading(true, 600);
```

## Styling Details

The skeleton uses your existing design system:

```tsx
// Heading placeholder
<div 
  className="bg-[#282828] rounded-lg mb-[5vh] skeleton-shimmer"
  style={{ 
    width: 'clamp(300px, 50vw, 600px)',  // Responsive width
    height: 'clamp(40px, 3.5vw, 64px)'   // Responsive height
  }}
/>

// Card placeholder
<div className="bg-[#282828] rounded-lg p-6 aspect-[3/4] max-w-[200px] w-full ring-1 ring-border-subtle skeleton-shimmer">
  {/* Circular icon */}
  <div className="w-16 h-16 rounded-full bg-[#1a1a1a] mb-4" />
  
  {/* Text label */}
  <div className="w-3/4 h-5 bg-[#1a1a1a] rounded" />
</div>
```

## Complete Example

Here's a full implementation with proper loading flow:

```tsx
import React, { useState, useEffect } from 'react';
import { Briefcase, Eye, Code, Mountain } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { SkeletonExperienceSelector } from '@/components/skeletons';

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center bg-bg-card-hover rounded-lg cursor-pointer transition-smooth p-6 aspect-[3/4] max-w-[200px] w-full
      ring-1 ring-border-subtle hover:ring-2 hover:ring-spotify-green/60 focus-visible:ring-2 focus-visible:ring-spotify-green outline-none
      hover:shadow-[0_0_24px_0_hsl(var(--spotify-green)/0.35)] hover:scale-[1.06] hover:-translate-y-1"
    >
      <div className="text-text-base group-hover:text-spotify-green transition-smooth mb-4 scale-150">
        {icon}
      </div>
      <h3 className="text-text-base group-hover:text-spotify-green transition-smooth font-semibold text-lg text-center">
        {title}
      </h3>
    </div>
  );
};

const ProfileSelector: React.FC = () => {
  const { setSelectedProfile } = useAppContext();
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleProfileSelect = (profile: 'recruiter' | 'stalker' | 'developer' | 'adventurer') => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProfile(profile);
    }, 400);
  };

  const profiles = [
    { id: 'recruiter' as const, title: 'Recruiter', icon: <Briefcase size={48} /> },
    { id: 'stalker' as const, title: 'Stalker', icon: <Eye size={48} /> },
    { id: 'developer' as const, title: 'Developer', icon: <Code size={48} /> },
    { id: 'adventurer' as const, title: 'Adventurer', icon: <Mountain size={48} /> },
  ];

  // Show skeleton during initial load
  if (isLoading) {
    return <SkeletonExperienceSelector />;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-base transition-smooth-400 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 
        className="text-text-base font-bold mb-[5vh] text-center px-4" 
        style={{ fontSize: 'clamp(32px, 3.5vw, 56px)', letterSpacing: '-0.04em' }}
      >
        Choose Your Experience
      </h1>
      <div className="flex gap-[2vw] justify-center px-4 max-w-6xl">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            title={profile.title}
            icon={profile.icon}
            onClick={() => handleProfileSelect(profile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSelector;
```

## Testing

To test the skeleton:

1. **Visual Check**: Compare skeleton with actual component
   ```tsx
   // Temporarily set loading to always true
   const { isLoading } = usePageLoading(true, 10000);
   ```

2. **Transition Check**: Verify smooth transition
   ```tsx
   // Use default 600ms and watch the transition
   const { isLoading } = usePageLoading(true, 600);
   ```

3. **Responsive Check**: Test on different screen sizes
   - Desktop: 1920px - Full 4-card grid
   - Tablet: 768px - Cards should still be visible
   - Mobile: 375px - Cards may wrap or scroll

## Customization

### Adjust Loading Duration

```tsx
// Faster (400ms)
const { isLoading } = usePageLoading(true, 400);

// Slower (1000ms)
const { isLoading } = usePageLoading(true, 1000);
```

### Change Card Count

Modify the array in `SkeletonExperienceSelector.tsx`:

```tsx
// 3 cards instead of 4
{[...Array(3)].map((_, index) => (
  // ...
))}
```

### Adjust Colors

```tsx
// Lighter skeleton
<div className="bg-[#333333] ... skeleton-shimmer">

// Darker skeleton
<div className="bg-[#1f1f1f] ... skeleton-shimmer">
```

## File Locations

```
src/
├── components/
│   ├── ProfileSelector.tsx           (Original component)
│   └── skeletons/
│       ├── index.ts                   (Export file - updated)
│       └── SkeletonExperienceSelector.tsx  (NEW - Skeleton component)
└── hooks/
    └── use-page-loading.tsx          (Loading hook)
```

## Summary

✅ **Component Created**: `SkeletonExperienceSelector.tsx`  
✅ **Exports Updated**: Added to `skeletons/index.ts`  
✅ **Styling Matches**: Dark theme with `#282828` background  
✅ **Animation Applied**: Shimmer effect on all placeholders  
✅ **Layout Accurate**: Perfect 1:1 match with ProfileSelector  
✅ **Ready to Use**: Import and integrate immediately  

The skeleton is production-ready and follows all established patterns from your existing skeleton system!
