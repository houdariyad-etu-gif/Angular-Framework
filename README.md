📘 Compte Rendu : TP3 – Angular 19 & Spring Boot REST API

1. Introduction
Ce TP porte sur le développement d'une application frontend avec Angular 19 qui communique avec une API REST Spring Boot pour la gestion de produits. L'objectif principal est de mettre en pratique les concepts fondamentaux d'Angular : composants standalone, services, injection de dépendances et communication HTTP avec un backend.

2. Architecture Technique de la Solution

A. Architecture Globale
Le projet respecte une architecture client-serveur avec une séparation claire des responsabilités :

- Frontend (Angular 19) : Gère l'interface utilisateur, les événements, et l'affichage des données.
- Backend (Spring Boot) : Expose une API REST sur le port 8083 avec les endpoints CRUD pour les produits.
- Communication : Échange de données JSON via le protocole HTTP.

B. Composants Angular
| Composant | Rôle | Éléments clés |
|-----------|------|----------------|
| `ProductsComponent` | Affiche la liste des produits dans un tableau HTML | `*ngFor`, `subscribe()`, event binding (delete) |
| `ProductService` | Encapsule les appels API REST | `HttpClient`, `Observable`, méthodes `getAllproducts()` et `deleteProduct()` |

C. Service et Injection de Dépendances
Le service ProductService est injecté au niveau racine (providedIn: 'root') et utilise HttpClient pour interagir avec le backend :

typescript
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllproducts(): Observable<any> {
    return this.http.get('http://localhost:8083/products');
  }

  deleteProduct(product: any): Observable<any> {
    return this.http.delete('http://localhost:8083/products/' + product.id);
  }
}

3. Fonctionnalités Implémentées

A. Affichage des Produits
Le composant ProductsComponent appelle le service au chargement (ngOnInit) pour récupérer la liste des produits via subscribe() et les stocke dans une variable locale products.

| Élément | Description |
|---------|-------------|
| Méthode HTTP | `GET http://localhost:8083/products` |
| Framework | RxJS (`Observable`, `subscribe`) |
| Affichage | Tableau HTML avec `*ngFor` |
| Icons | Bootstrap icons pour l'interface utilisateur |

B. Suppression d'un Produit
Chaque ligne du tableau contient un bouton "Delete" qui déclenche la méthode handleDeleteProduct(product).
<img width="1912" height="612" alt="image" src="https://github.com/user-attachments/assets/4bfe853e-2a2c-4e47-98cc-2e4b86c1339e" />

typescript
handleDeleteProduct(product: any) {
  this.productService.deleteProduct(product).subscribe({
    next: () => this.getAllProducts(),  // Rafraîchit la liste
    error: (err) => console.log(err)
  });
}

C. Configuration du Client HTTP
Le fichier app.config.ts active le client HTTP pour toute l'application :

typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()      // Nécessaire pour HttpClient
  ]
};

D. Routage et Navigation
L'application intègre un système de routage avec app.routes.ts permettant la navigation entre les différentes vues.

E. Documentation API avec Swagger-UI
Le projet est lié au backend Spring Boot et utilise Swagger-UI pour la documentation et le test des endpoints REST.

4. Intégration avec le Backend Spring Boot

A. Endpoints attendus du backend
| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `/products` | Retourne la liste des produits (JSON) |
| DELETE | `/products/{id}` | Supprime un produit par son ID |

B. Configuration CORS (côté Spring Boot)
Pour permettre la communication entre Angular (port 4200) et Spring Boot (port 8083), le backend doit inclure l'annotation @CrossOrigin :

java
@RestController
@CrossOrigin("*")
public class ProductRestController {
    // ...
}

5. Exécution du Projet
Prérequis
Node.js (v18+)

npm ou yarn

Backend Spring Boot démarré sur le port 8083

Étapes
bash
# 1. Installer les dépendances
npm install

# 2. Lancer l'application Angular
npm start

# 3. Accéder à l'application
# Ouvrir http://localhost:4200/prods

6. Dépendances Principales
Dépendance	Version	Utilité
@angular/core	19.x	Framework Angular
@angular/common	19.x	HttpClient, directives communes
@angular/router	19.x	Routage et navigation
bootstrap-icons	Latest	Icônes pour l'interface


7. Compétences Acquises
- Création d'un projet Angular 19 avec composants standalone
- Injection de dépendances et création de services
- Communication HTTP avec HttpClient
- Manipulation des données asynchrones avec Observable et subscribe
- Intégration frontend/backend via API REST
- Gestion des erreurs et débogage des problèmes CORS
- Utilisation de Swagger-UI pour la documentation API
- Intégration d'icônes Bootstrap

8. Conclusion
Ce TP a permis de mettre en pratique les concepts fondamentaux d'Angular 19 dans le cadre d'une application réelle communiquant avec une API REST Spring Boot. La combinaison d'Angular pour le frontend et Spring Boot pour le backend illustre une architecture moderne de type full-stack largement utilisée dans les applications d'entreprise.

L'ajout de Swagger-UI facilite la documentation et le test des endpoints, tandis que l'intégration des icônes Bootstrap améliore l'expérience utilisateur. La séparation claire des couches (présentation, service, API) facilite la maintenance et l'évolution du projet.
