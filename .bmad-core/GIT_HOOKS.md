# Git Hooks for BMAD Integration

This project uses BMAD (Brownfield/Mature Application Development) Core system for development workflows.

## Hooks Configuration

The following git hooks are recommended for this project:

### Pre-commit Hook
- Run linting and type checking
- Ensure bmad-related files are properly formatted
- Validate that story files are properly updated

### Post-commit Hook
- Update bmad change logs
- Generate documentation updates

### Post-merge Hook
- Validate that all bmad dependencies are up to date
- Run tests to ensure code quality

## Configuration
If you want to set up git hooks, create files in `.git/hooks/` directory:

- `pre-commit`
- `post-commit` 
- `post-merge`

Example pre-commit hook:

```bash
#!/bin/sh
# Run linting
npm run lint || exit 1

# Run type checking
npm run type-check || exit 1

# Run tests
npm test || exit 1
```