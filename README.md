# Fullstack data

## Projet

Le but de ce projet en fullstack était de faire une galerie de photos en ligne où les utilisateurs pouvaient voir des images en fonction de catégories et ajouter leurs propres images.

## Backend

Dans la partie Backend, on a utilisé une base de donnée Postgres pour stocker les url des images. Ces urls sont gérer dans un cloud (Cloudinary) et permettent de ne pas stocker les images sur le pc physiquement.

On a également utilisé Fastapi, SQLalchemy ainsi que Alembic pour migrer la base de données.

Pour tester le backend on se place dans le dossier "backend" puis on execute la commande:
```
uvicorn sql_app.main:app --reload
```

## Frontend

Dans la partie Frontend, nous avons utilisé Vue et Js afin de construire notre page web et les différentes fonctionalitées. 
Il peut se lancer grâce au Dockerfile ou à la main. Il se compose en plusieurs parties, les assets, components et la source (folder principal).
Les assets comportent les images tel que notre logo (fait sur IA logo generator). Nous avons aussi les components, 
CreatePosts et FileSelect qui est un selecteur de fichier (pour ajouter des images), 
CreateUser qui permet de rentrer ses informations personnelles afin de créer un compte (pas de renvoi dans la base), 
Home qui est la page d'acceuil,
Login permet aux utilisateur de s'authentifier,
Tab et Tabs sont les différents onglets pour les catégories qui nous avons choisi,
Thrive est l'affichage des photos et la mise en page des onglets.

Tous ces components sont liés grâce au routeur et à l'APP qui permet de faire la barre de navigation.

Nous avons par la suite fait un form pour harmoniser le tout.

## Améliorations

Nous n'avons malheureusement pas pu faire le lien entre le front et le back malgré que individuellement les deux fonctionnent très bien. Les problèmes sont notamment dus au fait que npm a eu des problèmes et que nous avons du faire pas mal de changements.
