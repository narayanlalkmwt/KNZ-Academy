# KNZ Academy - Project Outline

## File Structure

### Main Pages (4 HTML files)
1. **index.html** - Landing Page & Main Dashboard
2. **classes.html** - Course Catalog & Class Information
3. **dashboard.html** - Student Portal & Progress Tracking
4. **about.html** - About KNZ Academy & Contact Information

### Assets & Resources
- **resources/** - Directory for all images and media
  - hero-academy.jpg - Main hero image for landing page
  - student-1.jpg to student-6.jpg - Student testimonial photos
  - teacher-1.jpg to teacher-4.jpg - Instructor profile photos
  - class-math.jpg, class-science.jpg, class-english.jpg - Subject images
  - bg-pattern.svg - Background decorative elements
  - logo-knz.png - Academy logo

### JavaScript Files
- **main.js** - Core functionality and interactions

## Page-by-Page Breakdown

### 1. index.html - Landing Page & Main Dashboard
**Purpose**: Primary entry point showcasing KNZ Academy's value proposition
**Key Sections**:
- Navigation bar with logo and menu items
- Hero section with animated heading and call-to-action
- Interactive class booking calendar (main interactive component)
- Subject overview cards with hover effects
- Student testimonials carousel
- Achievement statistics with animated counters
- Footer with contact information

**Interactive Elements**:
- Class schedule calendar with booking functionality
- Subject filter system
- Animated progress indicators
- Testimonial slider with auto-play

### 2. classes.html - Course Catalog & Class Information
**Purpose**: Detailed course information and class management
**Key Sections**:
- Course category navigation
- Interactive class grid with filtering
- Detailed course information modals
- Instructor profiles and specializations
- Pricing and package information
- Resource library with search functionality

**Interactive Elements**:
- Advanced filtering system (subject, level, duration, price)
- Course detail expandable cards
- Instructor booking system
- Resource search and bookmarking

### 3. dashboard.html - Student Portal & Progress Tracking
**Purpose**: Personalized student dashboard for progress monitoring
**Key Sections**:
- Student profile header with avatar and quick stats
- Interactive progress tracking charts
- Upcoming classes and assignments
- Achievement badges and milestones
- Message center for parent-teacher communication
- Resource library with personal bookmarks

**Interactive Elements**:
- Progress visualization using ECharts.js
- Assignment submission interface
- Message threading system
- Achievement unlock animations
- Personal calendar integration

### 4. about.html - About KNZ Academy & Contact Information
**Purpose**: Academy information, team profiles, and contact details
**Key Sections**:
- Academy mission and values
- Faculty profiles with specializations
- Success stories and achievements
- Contact form and location information
- FAQ section with expandable answers
- Social proof and certifications

**Interactive Elements**:
- Faculty profile cards with hover effects
- Contact form with validation
- FAQ accordion interface
- Location map integration

## Technical Implementation

### Core Libraries Integration
- **Anime.js**: Page transitions, micro-interactions, loading animations
- **ECharts.js**: Student progress charts, performance analytics
- **Typed.js**: Hero text animations, dynamic content
- **Splide.js**: Testimonial carousels, image galleries
- **p5.js**: Background particle effects, interactive learning elements
- **Pixi.js**: Advanced hero section visual effects

### Responsive Design Strategy
- Mobile-first approach with breakpoints at 768px and 1024px
- Flexible grid system using CSS Grid and Flexbox
- Optimized touch interactions for mobile devices
- Progressive enhancement for desktop features

### Performance Optimization
- Lazy loading for images and heavy components
- Minified CSS and JavaScript
- Optimized image formats (WebP with fallbacks)
- Critical CSS inlining for above-the-fold content

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility

## Content Strategy

### Educational Content
- Subject coverage: Mathematics, Science, English, Computer Science, Arts
- Grade levels: Elementary, Middle School, High School
- Class formats: One-on-one, Small Group, Online Sessions
- Duration options: 30min, 1hr, 2hr sessions

### User-Generated Content Areas
- Student testimonials and success stories
- Parent reviews and feedback
- Teacher qualifications and experience
- Achievement showcases and progress highlights

### Interactive Features Data
- Mock student profiles with realistic progress data
- Sample class schedules with availability
- Pre-populated resource library with educational materials
- Communication threads between parents and teachers

This structure ensures a comprehensive, functional tuition service platform that serves both marketing and operational purposes while providing an engaging user experience across all devices.