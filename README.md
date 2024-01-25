# Custom React Table

Custom React Table est une bibliothèque React personnalisée pour créer des tables interactives. Elle est conçue pour être facile à utiliser tout en étant extrêmement personnalisable pour répondre à une variété de besoins.

Cette bibliothèque est construite avec TypeScript et utilise Vite pour une expérience de développement fluide. Elle comprend également une configuration ESLint pour aider à maintenir la qualité du code.

# Prérequis

Avant d'utiliser Custom React Table, assurez-vous d'avoir les éléments suivants installés :

- Node.js : version 12 ou supérieure
- npm : version 6 ou supérieure

Assurez-vous également d'avoir une connaissance de base de React et de TypeScript pour une meilleure compréhension de l'utilisation de cette bibliothèque.

# Installation

Pour installer Custom React Table, vous pouvez exécuter l'une des commandes suivantes dans le répertoire de votre projet :

- Avec yarn :

  ```shell
  yarn add @tyulan/custom-react-table
  ```

- Avec npm :

  ```shell
  npm install @tyulan/custom-react-table
  ```

- Avec pnpm :
  ```shell
  pnpm install @tyulan/custom-react-table
  ```

Assurez-vous d'avoir Node.js et le gestionnaire de paquets correspondant (yarn, npm ou pnpm) installés sur votre machine avant d'exécuter ces commandes.

# Utilisation

Pour utiliser Custom React Table dans votre projet, suivez les étapes suivantes :

1. Importez le composant `Table` depuis la bibliothèque :

   ```jsx
   import { Table } from "@tyulan/custom-react-table";
   ```

2. Utilisez le composant `Table` dans votre code JSX pour afficher une table personnalisée :

   ```jsx
   function App() {
     const data = [
       {
         id: "1",
         firstName: "James",
         lastName: "Carter",
         // ...
       },
       // ...
     ];

     const columns = [
       {
         name: "First name",
         key: "firstName",
         selector: (row) => row.firstName,
       },
       {
         name: "Last name",
         key: "lastName",
         selector: (row) => row.lastName,
       },
       // ...
     ];

     return (
       <div>
         <h1>Custom React Table Example</h1>
         <Table
           data={data}
           columns={columns}
           listOfNumbersOfEntries={[10, 20, 30, 50]}
         />
       </div>
     );
   }
   ```

   Dans cet exemple, la prop `listOfNumbersOfEntries` est utilisée pour personnaliser les options dans le menu déroulant "nombre d'entrées à afficher". Les options seront 10, 20, 30 et 50. Si vous ne fournissez pas cette prop, les options par défaut seront utilisées (généralement [10, 25, 50, 100]).

3. Personnalisez le style de votre table en passant des props supplémentaires au composant `Table`. Par exemple, vous pouvez passer une prop `className` pour appliquer une classe CSS à la table :

   ```jsx
   return (
     <div>
       <h1>Custom React Table Example</h1>
       <Table data={data} columns={columns} className="my-custom-table" />
     </div>
   );
   ```

4. Contrôlez l'affichage de certains éléments de la table. Vous pouvez passer des props supplémentaires au composant `Table` pour choisir d'afficher ou non certains éléments. Par exemple :

   ```jsx
   return (
     <div>
       <h1>Custom React Table Example</h1>
       <Table
         data={data}
         columns={columns}
         className="my-custom-table"
         displaySearchBar={true}
         displayEntries={false}
         displayFooterRow={true}
         displayInfoEntries={false}
       />
     </div>
   );
   ```

   Dans cet exemple, les props `showHeader`, `showFooter`, `showPagination`, `displaySearchBar`, `displayEntries`, `displayFooterRow` et `displayInfoEntries` sont passées au composant Table. Ces props contrôlent l'affichage de l'en-tête, du pied de page, de la pagination, de la barre de recherche, des entrées, de la ligne de pied de page et des informations d'entrée respectivement.

## Les données

La structure des données (data) et des colonnes (columns) est essentielle lors de l'utilisation de la bibliothèque Custom React Table.

## Les données

La structure des données (`data`) et des colonnes (`columns`) est essentielle lors de l'utilisation de la bibliothèque Custom React Table. Voici un exemple de comment vous pourriez structurer vos données et vos colonnes :

```jsx
const data = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Doe" },
  // ...
];

const columns = [
  { name: "First name", key: "firstName", selector: (row) => row.firstName },
  { name: "Last name", key: "lastName", selector: (row) => row.lastName },
  // ...
];

// ...

return (
  <Table
    data={data}
    columns={columns}
    // ...
  />
);
```

Dans cet exemple, chaque objet dans le tableau data représente une ligne de la table et contient les différentes propriétés correspondant aux colonnes de la table.

Chaque objet dans le tableau columns représente une colonne et contient des propriétés telles que le nom de la colonne (`name`), la clé (`key`) utilisée pour identifier la colonne, et une fonction de sélection (`selector`) qui extrait la valeur de la colonne à partir de l'objet de données correspondant.

La structure correcte des données et des colonnes est importante car elle permet à la bibliothèque Custom React Table de fonctionner correctement en affichant les données dans les colonnes appropriées de la table. Assurez-vous de fournir les données et les colonnes dans le bon format pour obtenir les résultats souhaités lors de l'utilisation de cette bibliothèque.

## Personnalisation du style

Vous pouvez personnaliser le style de la table en passant des props de className au composant `Table`. Voici une liste des props de className que vous pouvez utiliser :

- `className`: Applique une classe CSS à l'élément de table principal.
- `classNameTable`: Applique une classe CSS à l'élément `<table>`.
- `classNameHeader`: Applique une classe CSS à l'élément d'en-tête de la table.
- `classNameRow`: Applique une classe CSS à chaque ligne de la table.
- `classNameInput`: Applique une classe CSS à l'élément d'input de la table (par exemple, pour la recherche ou le filtrage).
- `classNameThHeader`: Applique une classe CSS à chaque élément `<th>` dans l'en-tête de la table.
- `classNameThFooter`: Applique une classe CSS à chaque élément `<th>` dans le pied de page de la table.
- `classNameTdStriped`: Applique une classe CSS à chaque élément `<td>` dans les lignes à rayures de la table.
- `classNameTd`: Applique une classe CSS à chaque élément `<td>` de la table.
- `classNameBtnNumber`: Applique une classe CSS à chaque bouton de numéro de page dans la pagination de la table.
- `classNameBtnNextAndPrevious`: Applique une classe CSS aux boutons suivant et précédent dans la pagination de la table.

Par exemple, pour appliquer une classe CSS au boutons numéro de la pagination, vous pouvez faire comme suit :

```jsx
return (
  <Table
    data={data}
    columns={columns}
    classNameBtnNumber="my-custom-button"
    // ...
  />
);
```

# API Reference

| Prop Name                   | Type          | Required | Description                                                |
| --------------------------- | ------------- | -------- | ---------------------------------------------------------- |
| columns                     | TableColumn[] | Yes      | The columns of the table.                                  |
| data                        | TableData[]   | Yes      | The data for the table.                                    |
| title                       | string        | No       | The title of the table.                                    |
| className                   | string        | No       | The CSS class for the table container.                     |
| classNameTable              | string        | No       | The CSS class for the table itself.                        |
| classNameHeader             | string        | No       | The CSS class for the table header.                        |
| classNameRow                | string        | No       | The CSS class for the table rows.                          |
| classNameInput              | string        | No       | The CSS class for the search input.                        |
| classNameThHeader           | string        | No       | The CSS class for the table header cells.                  |
| classNameThFooter           | string        | No       | The CSS class for the table footer cells.                  |
| classNameTdStriped          | string        | No       | The CSS class for the striped table cells.                 |
| classNameTd                 | string        | No       | The CSS class for the table cells.                         |
| classNameBtnNumber          | string        | No       | The CSS class for the pagination number buttons.           |
| classNameBtnNextAndPrevious | string        | No       | The CSS class for the next and previous buttons.           |
| customMessageNoData         | string        | No       | The custom message to display when there is no data.       |
| displaySearchBar            | boolean       | No       | Controls whether to display the search bar.                |
| displayEntries              | boolean       | No       | Controls whether to display the entries of the table.      |
| displayFooterRow            | boolean       | No       | Controls whether to display the footer row of the table.   |
| displayInfoEntries          | boolean       | No       | Controls whether to display the info entries of the table. |
| listOfNumbersOfEntries      | number[]      | No       | The list of numbers for the entries dropdown.              |
| numberOfEntries             | number        | No       | The number of entries to display on a page.                |
