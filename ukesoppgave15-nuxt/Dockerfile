# Stage 1: Setup Node.js environment
FROM node:18-alpine AS runtime

# Create app directory
WORKDIR /app

# Nuxt 3 listens on 0.0.0.0 by default when in a container environment,
# but it's good practice to set HOST and PORT if needed.
# ENV HOST=0.0.0.0
# ENV PORT=3000

# Copy the built server output
# This assumes your Nuxt build output for the server is in .output/server
COPY .output/server /app/server
COPY .output/public /app/public

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change ownership of the app directory to the new user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Expose the port the Nuxt server will listen on (default is 3000)
EXPOSE 3000

# Command to run the Nuxt server
# Nuxt 3's server entry point is typically .output/server/index.mjs
CMD ["node", "server/index.mjs"]