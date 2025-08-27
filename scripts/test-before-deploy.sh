#!/bin/bash

# Pre-deployment Testing Script
# This script runs all tests and checks before building and deploying

set -e  # Exit on any error

echo "🚀 Starting pre-deployment testing..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm ci
else
    print_status "Dependencies already installed"
fi

# Run type checking
print_status "Running TypeScript type checking..."
if npm run type-check; then
    print_status "Type checking passed"
else
    print_error "Type checking failed"
    exit 1
fi

# Run linting
print_status "Running ESLint..."
if npm run lint; then
    print_status "Linting passed"
else
    print_warning "Linting issues found. Attempting to fix..."
    if npm run lint:fix; then
        print_status "Linting issues auto-fixed"
    else
        print_error "Linting issues could not be auto-fixed"
        exit 1
    fi
fi

# Run API tests
print_status "Running API tests..."
if npm run test:api; then
    print_status "API tests passed"
else
    print_error "API tests failed"
    exit 1
fi

# Run client tests
print_status "Running client tests..."
if npm run test:client; then
    print_status "Client tests passed"
else
    print_error "Client tests failed"
    exit 1
fi

# Run all tests with coverage
print_status "Running full test suite with coverage..."
if npm run test:coverage; then
    print_status "All tests passed with coverage"
else
    print_error "Tests failed"
    exit 1
fi

# Verify build
print_status "Verifying build process..."
if npm run build; then
    print_status "Build verification passed"
else
    print_error "Build verification failed"
    exit 1
fi

# Check build output
if [ -d "dist" ] && [ -f "dist/index.js" ]; then
    print_status "Build output verified"
else
    print_error "Build output not found or incomplete"
    exit 1
fi

echo ""
echo "🎉 All pre-deployment checks passed!"
echo "✅ Type checking: PASSED"
echo "✅ Linting: PASSED"
echo "✅ API tests: PASSED"
echo "✅ Client tests: PASSED"
echo "✅ Full test suite: PASSED"
echo "✅ Build verification: PASSED"
echo ""
echo "🚀 Ready for deployment!"

# Optional: Show test coverage summary
if command -v npx &> /dev/null; then
    echo ""
    echo "📊 Test Coverage Summary:"
    npx vitest run --coverage --reporter=text | grep -E "(Statements|Branches|Functions|Lines)" | tail -4
fi
