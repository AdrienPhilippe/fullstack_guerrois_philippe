FROM node:14

# définit le dossier 'app' comme dossier de travail
WORKDIR /

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# installe les dépendances du projet
RUN npm install --global yarn

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# # construit l'app
RUN yarn install


### Compiles and minifies for production

RUN yarn run serve


EXPOSE 3000
CMD [ "lite-server", "--baseDir=dist" ]