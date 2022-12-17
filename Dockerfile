FROM nikolaik/python-nodejs:python3.11-nodejs18-slim

RUN apt-get update
RUN apt-get install ffmpeg libgl1 -y
RUN pip3 install golden-frame
RUN npm i --location=global pnpm

WORKDIR /cunny

# Copy Every Important Stuff
COPY package.json turbo.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY .gitignore .env ./
COPY apps ./apps
COPY packages ./packages
COPY prisma ./prisma

RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 5374 5375

CMD ["pnpm", "start"]
