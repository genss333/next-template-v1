# Base image
FROM node:current-alpine3.22 AS base

# Deps stage
FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /srv/devops/next-app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Builder stage
FROM base AS builder
WORKDIR /srv/devops/next-app
COPY --from=deps /srv/devops/next-app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Runner stage
FROM base AS runner
WORKDIR /srv/devops/next-app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /srv/devops/next-app/public ./public
COPY --from=builder --chown=nextjs:nodejs /srv/devops/next-app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /srv/devops/next-app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
