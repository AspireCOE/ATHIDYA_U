<style>
.positive{
    color:limegreen;
}
.negative{
    color: red;
}
</style>

## Authentication endpoint

### Login endpoint

> /api/v1/login

| Case type                              | Functinoality          | Description                               | Implementation | Testing |
| :------------------------------------- | :--------------------- | :---------------------------------------- | :------------- | ------- |
| <span class='positive'>Positive</span> | Login                  | login with valid credentials              | &check;        | &check; |
| <span class='negative'>Negative</span> | LoginWithEmptyCreds    | login with credentials as null or empty   | &check;        | &check; |
| <span class='negative'>Negative</span> | LoginWithWrongUsername | login with non existing or wrong username | &check;        | &check; |
| <span class='negative'>Negative</span> | LoginWithWrongPassword | login with wrong username                 | &check;        | &check; |

### Signup endpoint

> /api/v1/register

| Case Type                              | Functinoality              | Description                                      | Implementation | Testing |
| :------------------------------------- | :------------------------- | :----------------------------------------------- | :------------- | ------- |
| <span class='positive'>Positive</span> | Signup                     | Signup with valid credentials                    | &check;        | &check; |
| <span class='negative'>Negative</span> | SignupWithEmptyBody        | Signup with any or all the value fields as empty | &check;        | &check; |
| <span class='negative'>Negative</span> | SignupWithExistingUsername | Signup with username of existing user            | &check;        | &check; |
