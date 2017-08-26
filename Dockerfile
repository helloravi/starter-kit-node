FROM node:6.10.0

WORKDIR /app  
ADD . /app  
RUN npm install

EXPOSE 3000
# CMD ["npm","run", "dev"]
CMD ["npm", "start"]

