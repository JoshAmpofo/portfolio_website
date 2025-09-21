# Project Rules and TypeScript Conventions

## 📋 Overview

This document outlines the coding standards, best practices, and conventions for the Portfolio Website project. These rules ensure code consistency, maintainability, and scalability while leveraging the latest TypeScript features and industry best practices.

## 🎯 Core Principles

1. **Type Safety First**: Leverage TypeScript's type system to catch errors at compile time
2. **Code Clarity**: Write self-documenting code with clear naming and structure
3. **Maintainability**: Design for long-term maintenance and scalability
4. **Performance**: Optimize for both development and runtime performance
5. **Accessibility**: Ensure inclusive design and WCAG compliance
6. **AI Collaboration**: Structure code to work effectively with AI assistants

## 📁 Project Structure and Organization

### Directory Structure

```
src/
├── components/
│   ├── ui/                 # Basic UI components (buttons, inputs, etc.)
│   ├── layout/            # Layout components (header, footer, navigation)
│   ├── features/          # Feature-specific components
│   └── common/            # Shared components across features
├── hooks/
│   ├── api/               # API-related hooks
│   ├── ui/                # UI-related hooks
│   └── utils/             # Utility hooks
├── lib/
│   ├── api/               # API client and configuration
│   ├── auth/              # Authentication logic
│   ├── utils/             # Utility functions
│   └── validators/        # Validation schemas
├── types/
│   ├── api/               # API response types
│   ├── components/        # Component prop types
│   └── global/            # Global type definitions
├── styles/
│   ├── globals.css        # Global styles
│   ├── components.css     # Component-specific styles
│   └── themes/            # Theme definitions
├── data/
│   ├── static/            # Static data files
│   └── config/            # Configuration constants
└── app/                   # Next.js App Router pages
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `ProjectCard.tsx`, `NavigationMenu.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useProjectData.ts`, `useTheme.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Types**: PascalCase (e.g., `Project.ts`, `ApiResponse.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`, `THEME_COLORS.ts`)

## 🔧 TypeScript Configuration and Best Practices

### TSConfig Settings

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

### Type Definition Standards

#### 1. Interface vs Type

- **Use `interface`** for object shapes that might be extended
- **Use `type`** for unions, intersections, and computed types

```typescript
// ✅ Good - Interface for extensible object shapes
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  createdAt: Date;
}

// ✅ Good - Type for unions and computed types
type ProjectStatus = 'draft' | 'published' | 'archived';
type ProjectWithStatus = Project & { status: ProjectStatus };
```

#### 2. Strict Type Definitions

```typescript
// ✅ Good - Explicit typing
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

// ❌ Bad - Any types
interface ApiResponse {
  data: any;
  success: any;
}
```

#### 3. Generic Constraints

```typescript
// ✅ Good - Constrained generics
interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
}
```

## ⚛️ React and Component Standards

### Component Structure

```typescript
// ✅ Good - Component template
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact';
  className?: string;
  onProjectClick?: (project: Project) => void;
}

/**
 * ProjectCard component displays project information in a card format
 * 
 * @param project - The project data to display
 * @param variant - Visual variant of the card
 * @param className - Additional CSS classes
 * @param onProjectClick - Callback when project is clicked
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'default',
  className,
  onProjectClick,
}) => {
  const handleClick = React.useCallback(() => {
    onProjectClick?.(project);
  }, [onProjectClick, project]);

  return (
    <div 
      className={cn(
        'project-card',
        variant === 'compact' && 'project-card--compact',
        className
      )}
      onClick={handleClick}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

// Export type for external use
export type { ProjectCardProps };
```

### Prop Types and Default Values

```typescript
// ✅ Good - Optional props with defaults
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) => {
  // Component implementation
};
```

### Custom Hooks

```typescript
// ✅ Good - Custom hook with proper typing
interface UseProjectDataReturn {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProjectData = (): UseProjectDataReturn => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchProjects = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await apiClient.get<Project[]>('/projects');
      setProjects(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
  };
};
```

## 🎨 Styling and CSS Standards

### Tailwind CSS Usage

```typescript
// ✅ Good - Conditional classes with cn utility
import { cn } from '@/lib/utils';

const Button = ({ variant, size, className }) => (
  <button
    className={cn(
      // Base styles
      'font-medium rounded-md transition-colors focus:outline-none focus:ring-2',
      // Variant styles
      {
        'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
        'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
      },
      // Size styles
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-4 py-2 text-base': size === 'md',
        'px-6 py-3 text-lg': size === 'lg',
      },
      // Custom classes
      className
    )}
  >
    Button
  </button>
);
```

### CSS Modules (when needed)

```typescript
// styles/ProjectCard.module.css
.card {
  @apply rounded-lg border border-gray-200 p-6 shadow-sm transition-shadow;
}

.card:hover {
  @apply shadow-md;
}

// ProjectCard.tsx
import styles from './ProjectCard.module.css';

export const ProjectCard = () => (
  <div className={styles.card}>
    {/* Component content */}
  </div>
);
```

## 🔄 State Management

### Zustand Store Structure

```typescript
// stores/projectStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
  isLoading: boolean;
  error: string | null;
}

interface ProjectActions {
  setProjects: (projects: Project[]) => void;
  setSelectedProject: (project: Project | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchProjects: () => Promise<void>;
}

type ProjectStore = ProjectState & ProjectActions;

export const useProjectStore = create<ProjectStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      projects: [],
      selectedProject: null,
      isLoading: false,
      error: null,

      // Actions
      setProjects: (projects) => set({ projects }),
      setSelectedProject: (selectedProject) => set({ selectedProject }),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      fetchProjects: async () => {
        set({ isLoading: true, error: null });
        try {
          const projects = await projectApi.getAll();
          set({ projects, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Unknown error',
            isLoading: false 
          });
        }
      },
    }),
    { name: 'project-store' }
  )
);
```

## 🌐 API and Data Handling

### API Client Structure

```typescript
// lib/api/client.ts
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }

  async post<T, U>(endpoint: string, data: T): Promise<ApiResponse<U>> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }
}

export const apiClient = new ApiClient(process.env.NEXT_PUBLIC_API_URL!);
```

### Data Validation with Zod

```typescript
// lib/validators/project.ts
import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
  githubUrl: z.string().url('Must be a valid URL').optional(),
  liveUrl: z.string().url('Must be a valid URL').optional(),
  createdAt: z.date(),
});

export type Project = z.infer<typeof projectSchema>;

// Usage in components
export const validateProject = (data: unknown): Project => {
  return projectSchema.parse(data);
};
```

## 🧪 Testing Standards

### Unit Testing with Jest and React Testing Library

```typescript
// __tests__/components/ProjectCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '@/components/ProjectCard';
import { mockProject } from '@/tests/mocks/project';

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });

  it('calls onProjectClick when clicked', () => {
    const onProjectClick = jest.fn();
    
    render(
      <ProjectCard 
        project={mockProject} 
        onProjectClick={onProjectClick} 
      />
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(onProjectClick).toHaveBeenCalledWith(mockProject);
  });
});
```

### Mock Data

```typescript
// tests/mocks/project.ts
export const mockProject: Project = {
  id: '1',
  title: 'Test Project',
  description: 'A test project for testing purposes',
  technologies: ['TypeScript', 'React'],
  githubUrl: 'https://github.com/test/project',
  createdAt: new Date('2024-01-01'),
};
```

## 📏 Code Quality and Linting

### ESLint Configuration

```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```

### Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## 📝 Documentation Standards

### JSDoc Comments

```typescript
/**
 * Formats a date into a human-readable string
 * 
 * @param date - The date to format
 * @param format - The format type ('short' | 'long' | 'relative')
 * @returns Formatted date string
 * 
 * @example
 * ```typescript
 * formatDate(new Date(), 'short') // "Jan 1, 2024"
 * formatDate(new Date(), 'relative') // "2 days ago"
 * ```
 */
export const formatDate = (
  date: Date, 
  format: 'short' | 'long' | 'relative' = 'short'
): string => {
  // Implementation
};
```

### Component Documentation

```typescript
/**
 * A reusable button component with multiple variants and sizes
 * 
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // Component implementation
};
```

## 🤖 AI-Assisted Development Guidelines

### Writing AI-Friendly Code

1. **Clear Naming**: Use descriptive names for better AI understanding
2. **Single Responsibility**: Keep functions and components focused
3. **Type Annotations**: Provide explicit types for better AI suggestions
4. **Documentation**: Write clear comments and JSDoc for context

### AI Tool Integration

#### GitHub Copilot
- Use clear, descriptive comments before complex logic
- Structure code in predictable patterns
- Leverage AI for boilerplate and repetitive code

#### CodeRabbit
- Configure for TypeScript-specific rules
- Set up automated security and performance checks
- Use for consistent code review across the team

#### Gemini-CLI
- Use for architectural decisions and planning
- Leverage for complex problem-solving
- Get recommendations for best practices

## 🚀 Performance and Optimization

### Code Splitting

```typescript
// Lazy loading components
const ProjectGallery = React.lazy(() => import('@/components/ProjectGallery'));

// Usage with Suspense
<Suspense fallback={<ProjectGallerySkeleton />}>
  <ProjectGallery />
</Suspense>
```

### Image Optimization

```typescript
// Next.js Image component
import Image from 'next/image';

<Image
  src="/project-screenshot.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## 🔒 Security Best Practices

### Environment Variables

```typescript
// lib/config.ts
const requiredEnvVars = ['NEXT_PUBLIC_API_URL', 'DATABASE_URL'] as const;

type RequiredEnvVar = typeof requiredEnvVars[number];

const validateEnv = (): Record<RequiredEnvVar, string> => {
  const env = {} as Record<RequiredEnvVar, string>;
  
  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar];
    if (!value) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
    env[envVar] = value;
  }
  
  return env;
};

export const config = validateEnv();
```

### Input Sanitization

```typescript
import DOMPurify from 'dompurify';

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html);
};
```

## 📈 Monitoring and Analytics

### Error Boundaries

```typescript
// components/ErrorBoundary.tsx
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

## 🔄 Version Control and Git Workflow

### Commit Message Convention

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(projects): add project filtering functionality`
- `fix(api): handle network timeout errors`
- `docs(readme): update setup instructions`

### Branch Naming

- `feature/project-gallery`
- `bugfix/mobile-navigation-issue`
- `hotfix/security-vulnerability`
- `chore/update-dependencies`

## 📋 Checklist for New Features

- [ ] TypeScript types defined and exported
- [ ] Component props properly typed
- [ ] Unit tests written and passing
- [ ] Integration tests for complex features
- [ ] Documentation updated
- [ ] Accessibility considerations addressed
- [ ] Performance implications considered
- [ ] Error handling implemented
- [ ] Mobile responsiveness verified
- [ ] AI tools used for code review
- [ ] Security implications assessed

## 🏆 Code Review Guidelines

### Before Submitting PR

1. Run type checking: `npm run type-check`
2. Run linting: `npm run lint`
3. Run tests: `npm run test`
4. Test mobile responsiveness
5. Verify accessibility with screen reader
6. Check performance with Lighthouse

### AI-Assisted Reviews

1. Use CodeRabbit for automated reviews
2. Run Copilot suggestions validation
3. Get architectural feedback from Gemini-CLI
4. Document AI tool usage in PR description

---

## 📚 Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Documentation](https://testing-library.com/docs/)

---

*This document is a living guide and should be updated as the project evolves and new best practices emerge.*