# Lordicon Setup Guide

## Package Installed
✅ @lordicon/react has been installed

## Folder Structure Created
```
src/
  assets/
    lordicons/
      # Place your Lordicon JSON files here
```

## Component Created
✅ `src/components/LordIcon.tsx` - Reusable wrapper component

## Icons Needed

You need to download the following Lordicon JSON files from https://lordicon.com and place them in `src/assets/lordicons/`:

### Navigation & UI Icons
1. **arrow-left.json** - Back button
2. **search.json** - Search functionality
3. **menu.json** - Mobile menu
4. **close.json** - Close buttons

### Life at My Vidyon Page
5. **coffee.json** - Flexible Work
6. **heart.json** - Health & Wellness / People First
7. **lightning.json** - Learning & Upskilling / Innovation
8. **calendar.json** - Paid Time Off
9. **gift.json** - Team Events
10. **users.json** - Collaborative Workspace / Diverse Expertise
11. **lightbulb.json** - Innovation Driven
12. **trophy.json** - Excellence
13. **trending-up.json** - Growth Mindset

### Who We Are Page
14. **award.json** - Excellence Driven
15. **globe.json** - Global Impact
16. **target.json** - Mission/Goals
17. **arrow-right.json** - CTA buttons

### Careers Page
18. **briefcase.json** - Job types
19. **map-pin.json** - Location
20. **clock.json** - Time/Schedule
21. **bookmark.json** - Saved items
22. **file-text.json** - Applications/Documents
23. **check-circle.json** - Success states
24. **alert-circle.json** - Alerts

### Additional Icons (as needed)
25. **building.json** - Company/Office
26. **sparkles.json** - Features/Highlights

## How to Download Icons

1. Visit https://lordicon.com
2. Search for each icon by name
3. Download the JSON file (requires account/subscription)
4. Save to `src/assets/lordicons/` with the names listed above

## Usage Example

```tsx
import LordIcon from '@/components/LordIcon';
import coffeeIcon from '@/assets/lordicons/coffee.json';

// In your component:
<LordIcon 
    icon={coffeeIcon}
    size={48}
    trigger="hover"
    colors={{ primary: '#DD0303' }}
/>
```

## Next Steps

1. Download the required Lordicon JSON files
2. Place them in `src/assets/lordicons/`
3. Let me know when ready, and I'll update all components to use Lordicons

## Notes
- Lordicon requires a subscription for most icons
- Free tier has limited icons available
- Each JSON file is ~10-50KB
- Icons animate on trigger (hover, click, or loop)
