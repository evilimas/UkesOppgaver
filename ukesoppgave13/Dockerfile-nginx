# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS deploy

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config for SPA routing
RUN mkdir -p /etc/nginx/conf.d
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# # Create directories that nginx user needs to write to
# RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run/nginx && \
#     chown -R nginx:nginx /usr/share/nginx/html && \
#     chown -R nginx:nginx /var/cache/nginx && \
#     chown -R nginx:nginx /var/log/nginx && \
#     chown -R nginx:nginx /var/run/nginx && \
#     chmod -R 755 /usr/share/nginx/html

# # Use non-root user for security
# USER nginx

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]