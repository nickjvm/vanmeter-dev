# Use the official Node.js 20 image as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application
# Copy the public directory
COPY --from=builder /app/public ./public

# Copy the standalone server files to the root
# This copies the contents of .next/standalone to the root of the container
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/ ./

# Copy static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the working directory to where the files were copied
WORKDIR /app

USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Set the hostname to 0.0.0.0 to listen on all network interfaces
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]
