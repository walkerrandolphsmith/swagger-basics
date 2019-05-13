# Title

Description

## Table of Contents

* [Servers](#servers)
* [Paths](#paths)
  - [`POST` /flag](#op-post-flag) 
  - [`GET` /flag/{id}](#op-get-flag-id) 
  - [`POST` /flag/{id}](#op-post-flag-id) 
  - [`DELETE` /flag/{id}](#op-delete-flag-id) 
* [Schemas](#schemas)
  - Flag


<a id="servers" />
## Servers

<table>
  <thead>
    <tr>
      <th>URL</th>
      <th>Description</th>
    <tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://openflags.io/v1" target="_blank">http://openflags.io/v1</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

<a name="security"></a>
## Security

<table class="table">
  <thead class="table__head">
    <tr class="table__head__row">
      <th class="table__head__cell">Type</th>
      <th class="table__head__cell">In</th>
      <th class="table__head__cell">Name</th>
      <th class="table__head__cell">Scheme</th>
      <th class="table__head__cell">Format</th>
      <th class="table__head__cell">Description</th>
    </tr>
  </thead>
  <tbody class="table__body">
    <tr class="table__body__row">
      <td class="table__body__cell">http</td>
      <td class="table__body__cell"></td>
      <td class="table__body__cell"></td>
      <td class="table__body__cell">bearer</td>
      <td class="table__body__cell">JWT</td>
      <td class="table__body__cell"></td>
    </tr>

  </tbody>
</table>

## Paths


### `POST` /flag
<a id="op-post-flag" />

> Create

Create a new feature flag






#### Request body
###### application/json



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```


###### application/xml



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```


###### application/x-www-form-urlencoded



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```




#### Responses


##### ▶ 200 - Successful Operation

###### Headers
_No headers specified_

##### ▶ 401 - Access token is missing or invalid

###### Headers
_No headers specified_

##### ▶ 405 - Invalid Flag supplied

###### Headers
_No headers specified_


#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

### `GET` /flag/{id}
<a id="op-get-flag-id" />

> Get by ID

Returns a single flag


#### Path parameters

##### &#9655; id

ID of flag to return


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>In</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id  <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td>path</td>
        <td>ID of flag to return</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>








#### Responses


##### ▶ 200 - Successful Operation

###### Headers
_No headers specified_

###### application/json



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```
###### application/xml



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```
##### ▶ 400 - Invaid ID supplied

###### Headers
_No headers specified_

##### ▶ 401 - Access token is missing or invalid

###### Headers
_No headers specified_

##### ▶ 404 - Resource not found

###### Headers
_No headers specified_


#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

### `POST` /flag/{id}
<a id="op-post-flag-id" />

> Update by ID

Update a specific, exisiting flag


#### Path parameters

##### &#9655; id

ID of flag to return


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>In</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id  <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td>path</td>
        <td>ID of flag to return</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>






#### Request body
###### application/json



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```


###### application/xml



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```


###### application/x-www-form-urlencoded



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```




#### Responses


##### ▶ 200 - Successful Operation

###### Headers
_No headers specified_

###### application/json



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```
###### application/xml



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```
##### ▶ 400 - Invaid ID supplied

###### Headers
_No headers specified_

##### ▶ 401 - Access token is missing or invalid

###### Headers
_No headers specified_

##### ▶ 404 - Resource not found

###### Headers
_No headers specified_

##### ▶ 405 - Invalid Flag supplied

###### Headers
_No headers specified_


#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

### `DELETE` /flag/{id}
<a id="op-delete-flag-id" />

> Delete

Delete flag by ID


#### Path parameters

##### &#9655; id

ID of flag to return


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>In</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id  <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td>path</td>
        <td>ID of flag to return</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>








#### Responses


##### ▶ 200 - Successful Operation

###### Headers
_No headers specified_

##### ▶ 400 - Invaid ID supplied

###### Headers
_No headers specified_

##### ▶ 401 - Access token is missing or invalid

###### Headers
_No headers specified_

##### ▶ 404 - Resource not found

###### Headers
_No headers specified_


#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

## Schemas

<a id="" />

#### Flag

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>id</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>enabled</td>
        <td>
          boolean
        </td>
        <td>True if the flag is enabled, false otherwise</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "id": "SHOPPINGCART_ADD_TO_CART",
  "enabled": true
}
```
