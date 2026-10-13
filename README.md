
## 1. Visión General del Proyecto

**GuitarsLA** es una aplicación web desarrollada con React que permite visualizar una colección de guitarras y gestionar un carrito de compras de manera interactiva.

El propósito de la aplicación es ofrecer una interfaz sencilla para consultar los productos disponibles, conocer sus características y precios, y seleccionar las guitarras que el usuario desea agregar a su carrito.

### Problema que resuelve

La aplicación proporciona una solución para la presentación de productos y la gestión básica de un carrito de compras, evitando que el usuario tenga que llevar un registro manual de los artículos seleccionados. Los cambios realizados en el carrito se guardan en el almacenamiento local del navegador, lo que permite conservar su contenido al recargar la página.
### Funcionalidades principales

- **Catálogo de productos:** visualización de las guitarras disponibles, incluyendo imagen, nombre, descripción y precio.

 <img width="1585" height="812" alt="image" src="https://github.com/user-attachments/assets/b87bebb3-7729-4c66-8286-13f902bf6c75" />
    
- **Gestión del carrito:** posibilidad de agregar productos, aumentar o disminuir sus cantidades y eliminar artículos individualmente.
    
- **Control de cantidades:** cada producto puede tener una cantidad mínima de una unidad y máxima de cinco unidades.
    
- **Cálculo automático del total:** actualización del importe según los precios y las cantidades de los productos seleccionados.
    
- **Persistencia local:** almacenamiento del carrito mediante `localStorage` para recuperar su contenido después de recargar la página.

<img width="502" height="617" alt="image" src="https://github.com/user-attachments/assets/9eb7c35d-1f9b-4c41-b0d7-5cac0796d749" />
    
- **Interfaz adaptable:** utilización de clases de diseño responsivo para organizar los productos y el encabezado según el tamaño de la pantalla.

 <img width="976" height="801" alt="image" src="https://github.com/user-attachments/assets/ab347838-e7c1-4cdd-9f3f-38a74497ab65" />

    
El proyecto está organizado mediante componentes reutilizables y un hook personalizado para separar la lógica del carrito de la presentación visual.

## 2. Ficha Técnica y Tecnologías

### 2.1. Lenguajes de programación

| Tecnología | Especificación                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TypeScript | Utilizado en su versión 6.0.2. Es un lenguaje de programación fuertemente tipado que mejora JavaScript al añadir tipado estático, entre otros, para encontrar errores durante la compilación en lugar del tiempo de ejecución. |
| TSX        | Extensión sintáctica utilizada para definir la estructura de la interfaz de React dentro de archivos TypeScript.                                                                                                               |



### 2.2. Librerías de interfaz y framework

| Tecnología | Versión o configuración | Función                                                                                   |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------- |
| React      | `^19.2.8`               | Biblioteca principal para construir la interfaz mediante componentes funcionales y hooks. |
| React DOM  | `^19.2.8`               | Permite renderizar los componentes de React en el DOM del navegador.                      |
| CSS        | Archivos `.css` locales | Define los estilos personalizados de la aplicación.                                       |

La interfaz se estructura mediante componentes funcionales, como `App`, `Header` y `Guitar`. Esta organización permite dividir la aplicación en elementos reutilizables y mantener separada la presentación de cada parte de la interfaz. . Además, utiliza los hooks integrados `useState`, `useEffect` y `useMemo` para administrar el estado, sincronizar datos y calcular valores derivados.

### 2.3. Entorno de desarrollo y herramientas

| Herramienta               | Versión o configuración                           | Función                                                                    |
| ------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| Node.js                   | Versión instalada pendiente de confirmar          | Entorno de ejecución utilizado durante el desarrollo y la compilación.     |
| Vite                      | `^8.3.0`                                          | Herramienta de compilación y servidor de desarrollo.                       |
| Plugin de React para Vite | `^6.1.1`                                          | Integra el soporte de React en el entorno de Vite.                         |
| npm                       | `package-lock.json`, formato de bloqueo versión 3 | Gestor de paquetes utilizado para administrar las dependencias.            |
| ESLint                    | `^10.10.0`                                        | Analiza el código para detectar problemas y mantener criterios de calidad. |

### 2.4. Dependencias clave

**React y hooks**

React proporciona la estructura de componentes de la aplicación. Se utilizan los hooks integrados `useState`, `useEffect` y `useMemo` para administrar el estado, sincronizar el carrito con el almacenamiento local y optimizar el cálculo de valores derivados.

**Hook personalizado** `**useCart**`

El hook `useCart` centraliza la lógica del carrito de compras y devuelve el estado, los productos disponibles y las funciones necesarias para modificar el carrito. Sus responsabilidades incluyen:

- Agregar guitarras al carrito.
    
- Incrementar y disminuir las cantidades.
    
- Eliminar productos individualmente.
    
- Vaciar el carrito.
    
- Calcular el total de la compra.
    
- Determinar si el carrito está vacío.
    
- Persistir y recuperar el contenido mediante `localStorage`.

**Vite y** **@vitejs/plugin-react**

Vite proporciona el servidor de desarrollo y el proceso de compilación. El plugin de React permite integrar el soporte necesario para trabajar con componentes React y JSX.

**ESLint y sus complementos**

El proyecto incorpora ESLint, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` y `globals`. Estas herramientas ayudan a identificar problemas de código, revisar el uso correcto de los hooks y facilitar el mantenimiento durante el desarrollo.


**Almacenamiento local del navegador**

Se utiliza la API nativa `localStorage` para persistir el carrito en el navegador. Esta funcionalidad no requiere una dependencia externa adicional.

**Estilos y recursos gráficos**

Bootstrap proporciona clases de diseño y utilidades visuales. Los archivos CSS y los recursos gráficos locales, como las imágenes de las guitarras, el logotipo y el icono del carrito, complementan la interfaz.

**Enrutamiento y comunicación HTTP**

No se hace uso de bibliotecas como React Router o Axios.

## 3. Arquitectura e Implementación en React

### 3.1. Hooks nativos

La aplicación utiliza hooks de React para administrar el estado, sincronizar la información del carrito con el almacenamiento del navegador y optimizar el cálculo de valores derivados.

| Hook          | Implementación y propósito                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `useState`    | Administra el estado del carrito, los datos de los productos y la inicialización del carrito desde `localStorage`. Se utiliza principalmente en el hook personalizado `useCart`.                 |
| `useEffect`   | Sincroniza el contenido del carrito con `localStorage` cada vez que cambia el estado `cart`.                                                                                                     |
| `useMemo`     | Calcula `isEmpty` para determinar si el carrito no contiene productos y `cartTotal` para obtener el importe total de la compra. Ambos valores se recalculan cuando cambia la dependencia `cart`. |
| `useRef`      | No se utiliza en la implementación actual.                                                                                                                                                       |
| `useCallback` | No se utiliza en la implementación actual.                                                                                                                                                       |


#### Uso de `useState`

El hook personalizado `useCart` utiliza `useState` para conservar el contenido del carrito y obtener los datos de los productos.

```jsx
const [data] = useState(db);
const [cart, setCart] = useState(initialCart);
```

La función `initialCart` recupera el carrito guardado en el navegador. Si no existe información almacenada, devuelve un arreglo vacío.

#### Uso de `useEffect`

Se utiliza para guardar los cambios del carrito en el almacenamiento local.

```jsx
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
```

La dependencia `[cart]` hace que el efecto se ejecute cuando cambia el carrito. De esta manera, los productos y sus cantidades permanecen guardados al recargar la página.

#### Uso de `useMemo`

Se emplea para obtener valores derivados del estado actual del carrito.

```jsx
const isEmpty = useMemo(
    () => cart.length === 0,
    [cart]
);

const cartTotal = useMemo(
    () => cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    ),
    [cart]
);
```

`isEmpty` permite mostrar un mensaje cuando el carrito está vacío, mientras que `cartTotal` calcula el precio acumulado de los productos seleccionados.

En este caso, `useMemo` evita repetir estos cálculos mientras `cart` no cambie, aunque su utilidad de rendimiento depende del tamaño de los datos y del costo del cálculo.

### 3.2. Custom Hooks (Hooks Personalizados)

#### `useCart`

El proyecto implementa un hook personalizado denominado `useCart`, cuya responsabilidad es encapsular la lógica relacionada con el carrito de compras.

**Lógica encapsulada**

- Inicialización del carrito a partir de `localStorage`.
    
- Administración del estado de los productos seleccionados.
    
- Incorporación de guitarras al carrito.
    
- Incremento y disminución de cantidades.
    
- Eliminación individual de productos.
    
- Vaciado completo del carrito.
    
- Cálculo del importe total.
    
- Determinación de si el carrito está vacío.
    
- Persistencia de los cambios en el navegador.
    

**Valores y métodos expuestos**

|Elemento|Descripción|
|---|---|
|`cart`|Arreglo de productos que forman parte del carrito.|
|`data`|Colección de guitarras disponibles en el catálogo.|
|`addToCart(item)`|Agrega una guitarra o incrementa su cantidad si ya existe.|
|`decreaseQuantity(id)`|Disminuye la cantidad de un producto sin bajar de una unidad.|
|`increaseQuantity(id)`|Incrementa la cantidad de un producto sin superar cinco unidades.|
|`removeFromCart(id)`|Elimina un producto por su identificador.|
|`clearCart()`|Vacía el carrito.|
|`cartTotal`|Importe total calculado a partir de los precios y las cantidades.|
|`isEmpty`|Indica si el carrito está vacío.|
|`total`|Estado adicional declarado en el hook, actualmente sin una función efectiva en la lógica presentada.|

**Reutilización**

El hook se utiliza en `App` para obtener los datos y las operaciones necesarias para el catálogo. También se invoca en `Header` para calcular el total y comprobar si el carrito está vacío.

Esta separación permite concentrar las operaciones del carrito en una unidad lógica independiente de su representación visual.

Actualmente, el hook se invoca por separado en ambos componentes. Por ello, cada invocación crea su propia instancia de estado: el carrito de `App` y el de `Header` no comparten automáticamente el mismo estado. Para mantener una única fuente de verdad, se recomienda utilizar el estado de `App` y transmitir `cart`, `cartTotal` e `isEmpty` a `Header` mediante `props`, o implementar un contexto compartido si la aplicación crece.

### 3.3. Estructura de componentes

La interfaz se divide en componentes funcionales que representan diferentes responsabilidades de la aplicación.

|Componente|Responsabilidad|Clasificación|
|---|---|---|
|`App`|Obtiene los datos y las funciones del carrito, coordina los componentes y construye la vista principal.|Inteligente o contenedor.|
|`Header`|Presenta el encabezado y el contenido del carrito, incluyendo las cantidades, el total y los controles de modificación.|Presentacional con lógica de visualización; actualmente también invoca `useCart`.|
|`Guitar`|Presenta la información de una guitarra y permite agregarla al carrito mediante una función recibida por `props`.|Principalmente presentacional.|
|`useCart`|Encapsula el estado y las operaciones del carrito. No es un componente visual, sino un hook personalizado.|Lógica reutilizable.|

#### Componente `App`

Es el componente principal de la aplicación. Obtiene el catálogo y las operaciones del carrito mediante `useCart`, renderiza el encabezado y genera dinámicamente los componentes `Guitar` a partir de la colección de productos.

#### Componente `Guitar`

Recibe el objeto `guitar` y la función `addToCart` mediante propiedades. Se encarga de presentar la imagen, el nombre, la descripción y el precio, así como de ofrecer el botón para agregar el producto.

#### Componente `Header`

Muestra el carrito de compras y permite modificar las cantidades, eliminar productos o vaciar el carrito. También presenta el total y un mensaje cuando no existen artículos.

Para mantener una arquitectura coherente, conviene que este componente reciba los datos y las funciones del carrito desde `App`, en lugar de crear una segunda instancia independiente del hook.

### 3.4. Props e inmutabilidad de datos

La comunicación entre los componentes se realiza mediante `props`. En este proyecto se hizo uso de tipos. 

Por ejemplo, `Guitar` utiliza el siguiente tipado:  
```tsx
type Guitar = {

    id: number;

    name: string;

    image: string;

    description: string;

    price: number;

}
```

Todos los tipos que se utilizan en el proyecto se definen dentro de un archivo `types.d.ts` y posteriormente son utilizados por los componentes `Guitar` y `Header`.

Por ejemplo, `Guitar` recibe el producto y la función para agregarlo al carrito:

```tsx
function Guitar({ guitar, addToCart }): GuitarProps {
    const { name, image, description, price } = guitar;

    return (
        <button
            type="button"
            onClick={() => addToCart(guitar)}
        >
            Agregar al Carrito
        </button>
    );
}
```

Las propiedades se reciben mediante desestructuración y se utilizan para representar la información del producto.

En cuanto a la inmutabilidad, React recomienda crear nuevos arreglos y objetos al actualizar el estado. El hook ya aplica este principio en operaciones como `removeFromCart` y `decreaseQuantity`, mediante `filter` y `map`.

Sin embargo, en `addToCart` se modifica directamente el objeto del producto al asignarle `quantity` e incrementar su valor dentro de una copia superficial del arreglo. Se recomienda crear un nuevo objeto para cada producto modificado y evitar mutaciones del estado anterior.

## 4. Patrones, Estado y Persistencia

### 4.1. Estrategia de manejo de estado

La aplicación utiliza el estado local de React mediante `useState`. No se observa el uso de Context API ni de bibliotecas externas de gestión de estado, como Redux o Zustand.

El estado se utiliza principalmente para mantener los productos seleccionados y reflejar las operaciones del usuario en la interfaz.

La estrategia actual se compone de los siguientes elementos:

- **Estado del catálogo:** contiene la colección de guitarras importada desde el módulo local `data/db`.
    
- **Estado del carrito:** almacena los productos seleccionados y sus cantidades.
    
- **Valores derivados:** `cartTotal` e `isEmpty` se calculan a partir del contenido del carrito.
    
- **Comunicación entre componentes:** se realiza mediante `props` y funciones de devolución de llamada (_callbacks_).
    

Se recomienda mantener una única fuente de verdad para el carrito, centralizando su estado en `App` y compartiendo los datos con los componentes que los necesiten.

### 4.2. Persistencia en el navegador

La persistencia se implementa mediante `localStorage`, una API nativa del navegador que conserva los datos entre recargas y sesiones, hasta que se eliminan o el navegador los borra.

La aplicación utiliza dos operaciones principales:

**Recuperación del carrito**

Al inicializar el estado, `initialCart` intenta recuperar el contenido previamente guardado.

```jsx
function initialCart() {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
}
```

**Guardado del carrito**

Cuando cambia el estado del carrito, el efecto convierte el arreglo en JSON y lo guarda en el navegador.

```jsx
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
```

No se hace uso de `sessionStorage` ni de cookies para gestionar el carrito.

**Consideraciones técnicas**

- `localStorage` almacena cadenas de texto, por lo que se utiliza `JSON.stringify` para guardar el arreglo y `JSON.parse` para recuperarlo.
    
- La recuperación actual no contempla errores si el contenido almacenado no contiene JSON válido.
    
- Los datos permanecen en el navegador y no se sincronizan con un servidor.
    
- El contenido almacenado no debe considerarse una fuente confiable para operaciones comerciales o pagos.
    

### 4.3. Manejo de estados de la interfaz

La aplicación presenta diferentes estados relacionados con el catálogo y el carrito. Sin embargo, no todos los estados asíncronos convencionales se encuentran implementados.

|Estado|Implementación actual|
|---|---|
|`empty`|Implementado mediante `isEmpty`. Se muestra el mensaje «El carrito está vacío» cuando no hay productos seleccionados.|
|`success`|Representado de forma implícita cuando los productos se muestran y las operaciones del carrito se reflejan en la interfaz. No existe un estado explícito de éxito.|
|`loading`|No implementado. El catálogo se obtiene de un módulo local, sin una petición HTTP asíncrona visible.|
|`error`|No implementado para la carga de productos ni para la recuperación del carrito. No se observa una gestión explícita de excepciones.|

Dado que la información del catálogo procede de un módulo local, actualmente no es necesario implementar un estado de carga asociado a una petición HTTP. Si posteriormente se incorpora una API, se debería añadir estados explícitos de carga, error y éxito para informar al usuario sobre el resultado de cada operación.

También se debería validar los datos recuperados de `localStorage` y manejar posibles errores de lectura o escritura, por ejemplo, cuando el contenido guardado es inválido o el navegador impide el acceso al almacenamiento.
