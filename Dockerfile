# etapa de compilación
FROM node:13.10.1-stretch
WORKDIR /app
RUN mkdir -p vue

RUN apt-get update -y
RUN apt-get install -y git nano

# Oh my zsh
RUN apt-get install -y  zsh curl
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
RUN sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="powerlevel10k\/powerlevel10k"/' ~/.zshrc
COPY zshrc ~/.zshrc

WORKDIR /app/vue
COPY ./package*.json ./
# RUN npm install @vue/cli -g
# RUN npm i -g create-nuxt-app gulp
RUN npm install
ENV PATH /app/vue/node_modules/.bin:$PATH

COPY . .

# INIT AWS config credentials
ARG AWS_ACCESS=$AWS_ACCESS
ARG AWS_SECRET=$AWS_SECRET
ARG AWS_REGION=$AWS_REGION

RUN mkdir -p /root/.aws

RUN echo "[default]" >> /root/.aws/credentials
RUN echo "aws_access_key_id=${AWS_ACCESS}" >> /root/.aws/credentials
RUN echo "aws_secret_access_key=${AWS_SECRET}" >> /root/.aws/credentials

RUN echo "[default]" >> /root/.aws/config
RUN echo "region=${AWS_REGION}" >> /root/.aws/config
RUN echo "output=json" >> /root/.aws/config

RUN chmod 600 /root/.aws/*
# END AWS config credentials

RUN chmod +x /app/vue/deploy.sh
# RUN npm run test

EXPOSE 80
CMD [ \
    "bash", \
    "-c", \
    "npm run serve -- --port 80 &&  \
    /bin/bash \
    " \
    ]
