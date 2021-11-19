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

## Améliorations

Nous n'avons malheureusement pas pu faire le lien entre le front et le back malgré que individuellement les deux fonctionnent très bien. 
