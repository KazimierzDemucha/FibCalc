FROM node:13-alpine

RUN mkdir -p /home/FibCalc

COPY ./FibCalc /home/FibCalc

CMD ["node", "/home/FibCalc/app.js"]